import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GlobalWorkerOptions, getDocument, type PDFDocumentProxy } from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

GlobalWorkerOptions.workerSrc = pdfWorker;

const PDF_URL = '/assets/Udyam-Registration-Certificate.pdf';

const Certificate = () => {
  const navigate = useNavigate();
  const canvasHostRef = useRef<HTMLDivElement | null>(null);
  const pdfRef = useRef<PDFDocumentProxy | null>(null);
  const isRenderingRef = useRef(false);
  const lastWidthRef = useRef<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    let isCancelled = false;
    let resizeTimer: number | null = null;

    const renderPdf = async () => {
      const host = canvasHostRef.current;
      if (!host || isCancelled || isRenderingRef.current) {
        return;
      }

      isRenderingRef.current = true;

      try {
        setError(null);

        if (!pdfRef.current) {
          setIsLoading(true);
          const loadingTask = getDocument(PDF_URL);
          pdfRef.current = await loadingTask.promise;
        }

        const pdf = pdfRef.current;
        if (!pdf || isCancelled) {
          return;
        }

        const containerWidth = host.clientWidth || 1;
        const widthChanged =
          lastWidthRef.current === null ||
          Math.abs(containerWidth - lastWidthRef.current) > 2;

        if (!widthChanged && host.childElementCount > 0) {
          return;
        }
        const deviceScale = Math.min(window.devicePixelRatio || 1, 1.5);

        lastWidthRef.current = containerWidth;
        host.innerHTML = '';

        for (let pageIndex = 1; pageIndex <= pdf.numPages; pageIndex += 1) {
          const page = await pdf.getPage(pageIndex);
          const viewport = page.getViewport({ scale: 1 });
          const scale = containerWidth / viewport.width;
          const scaledViewport = page.getViewport({ scale });

          const canvas = document.createElement('canvas');
          canvas.width = Math.floor(scaledViewport.width * deviceScale);
          canvas.height = Math.floor(scaledViewport.height * deviceScale);
          canvas.style.width = `${Math.floor(scaledViewport.width)}px`;
          canvas.style.height = `${Math.floor(scaledViewport.height)}px`;
          canvas.className = 'block w-full';

          const context = canvas.getContext('2d');
          if (!context) {
            continue;
          }

          context.scale(deviceScale, deviceScale);
          await page.render({ canvasContext: context, viewport: scaledViewport }).promise;

          host.appendChild(canvas);

          if (pageIndex === 1) {
            if (!hasRendered) {
              setHasRendered(true);
            }
            if (!isCancelled) {
              setIsLoading(false);
            }
          }
        }

        if (!isCancelled && !hasRendered) {
          setHasRendered(true);
        }
      } catch (err) {
        if (!isCancelled) {
          setError('Unable to render the certificate. Please contact us for verification.');
          setHasRendered(false);
        }
      } finally {
        isRenderingRef.current = false;
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    const scheduleRender = () => {
      if (resizeTimer) {
        window.clearTimeout(resizeTimer);
      }
      resizeTimer = window.setTimeout(() => {
        renderPdf();
      }, 120);
    };

    renderPdf();

    const host = canvasHostRef.current;
    const observer = host ? new ResizeObserver(scheduleRender) : null;
    if (observer && host) {
      observer.observe(host);
    }

    return () => {
      isCancelled = true;
      if (resizeTimer) {
        window.clearTimeout(resizeTimer);
      }
      if (observer && host) {
        observer.unobserve(host);
      }
      if (pdfRef.current) {
        pdfRef.current.destroy();
        pdfRef.current = null;
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8">
      <div
        className="w-full max-w-6xl 2xl:max-w-7xl bg-white rounded-2xl shadow-2xl border border-orange-100 overflow-hidden"
        onContextMenu={(event) => event.preventDefault()}
      >
        <div className="flex items-start justify-between gap-4 px-6 py-4 border-b border-orange-100 bg-brand-bg">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-brand-dark">
              MSME (Udyam) Registration Certificate
            </h1>
            <p className="text-xs text-gray-500">Displayed for verification only.</p>
          </div>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-orange transition-colors"
            aria-label="Close certificate view"
          >
            <X size={18} />
            Close
          </button>
        </div>

        <div className="h-[52vh] sm:h-[56vh] md:h-[60vh] lg:h-[66vh] min-h-[400px] lg:min-h-[520px] overflow-y-scroll bg-neutral-900/95">
          {isLoading && !error && !hasRendered && (
            <div className="h-full w-full flex items-center justify-center text-sm text-gray-200">
              Loading certificate...
            </div>
          )}
          {error && (
            <div className="h-full w-full flex items-center justify-center text-sm text-red-200">
              {error}
            </div>
          )}
          <div
            ref={canvasHostRef}
            className="w-full bg-white"
          />
        </div>

        <div className="px-6 py-3 bg-white text-xs text-gray-500 border-t border-orange-100">
          If the document does not render in your browser, please contact us for verification.
        </div>
      </div>
    </div>
  );
};

export default Certificate;
