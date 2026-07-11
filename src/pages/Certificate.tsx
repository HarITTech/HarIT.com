import React, { useEffect, useRef, useState } from 'react';
import { X, FileText, ShieldAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GlobalWorkerOptions, getDocument, type PDFDocumentProxy } from 'pdfjs-dist';
import SEO from '../components/SEO';

// Set PDF.js worker from a reliable CDN matching package.json version 4.10.38
GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs';

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
    // Disable main page scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Prevent copy/paste, saving, and printing keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCmdOrCtrl = e.ctrlKey || e.metaKey;
      if (isCmdOrCtrl && (e.key === 's' || e.key === 'p' || e.keyCode === 83 || e.keyCode === 80)) {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown, true);
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
          canvas.className = 'block w-full pointer-events-none select-none';

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
        console.error(err);
        if (!isCancelled) {
          setError('Unable to load registration certificate. Security measures active.');
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
    <div 
      className="fixed inset-0 z-[60] bg-brand-dark/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 select-none"
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <SEO 
        title="MSME Udyam Registration Certificate" 
        description="Verify HarIT Tech Solution's official Government of India MSME (Udyam) registration certificate." 
      />
      
      <div className="w-full max-w-5xl h-[88vh] bg-white rounded-3xl shadow-2xl border border-orange-100 flex flex-col overflow-hidden animate-fade-in">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-orange-100 bg-brand-bg shrink-0">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-brand-dark flex items-center gap-2">
              <FileText className="text-brand-orange" size={24} />
              MSME (Udyam) Certificate
            </h1>
            <p className="text-xs text-gray-500">Government of India Registration Verification</p>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-50 border border-orange-100 text-brand-orange text-xs font-bold">
              <ShieldAlert size={14} /> Secured Canvas Viewer
            </span>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-brand-dark text-white rounded-xl hover:bg-brand-orange transition-all duration-300"
              aria-label="Close certificate view"
            >
              <X size={14} />
              Close
            </button>
          </div>
        </div>

        {/* Canvas PDF Render Container */}
        <div className="flex-1 bg-neutral-900 overflow-y-auto relative">
          {isLoading && !error && !hasRendered && (
            <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-200">
              Initializing Secure Viewer...
            </div>
          )}
          
          {error && (
            <div className="absolute inset-0 flex items-center justify-center text-sm text-red-200 p-6 text-center">
              {error}
            </div>
          )}

          {/* Canvas target wrapper. Disables right click context menu on all child elements */}
          <div
            ref={canvasHostRef}
            className="w-full bg-white select-none pointer-events-none"
            onContextMenu={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          />
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-4 bg-brand-bg text-[10px] text-gray-500 border-t border-orange-100 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Udyam Registration Number: UDYAM-MH-20-XXXXXXX</span>
          <span className="flex items-center gap-1 text-brand-orange font-semibold">
            <ShieldAlert size={12} /> Printing, Saving & Right-Click Blocked
          </span>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
