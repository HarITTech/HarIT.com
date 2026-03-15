import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const AaramseTerms: React.FC = () => {
  return (
    <div className="bg-brand-bg py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-2">AaramSe Terms &amp; Conditions</h1>
              <p className="text-sm text-gray-500">Last updated: March 15, 2026</p>
            </div>
            <Link to="/aaramse">
              <Button variant="outline">Back to AaramSe</Button>
            </Link>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              These Terms &amp; Conditions ("Terms") govern your access to and use of the AaramSe mobile application and related services
              (collectively, the "Service"). By using AaramSe, you agree to these Terms.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">1. Who We Are</h2>
              <p>
                AaramSe is a product by HarIT Tech Solution. AaramSe helps customers and service providers manage digital queues and smart
                appointments.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">2. Eligibility</h2>
              <p>
                You must be legally capable of entering into a binding agreement to use the Service. If you use AaramSe on behalf of a
                business (as a partner/owner), you represent that you are authorized to do so.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">3. Accounts</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You agree to provide accurate information and keep it updated.</li>
                <li>You are responsible for all activity that occurs under your account.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">4. Bookings, Queues &amp; Partner Services</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  AaramSe provides tools to create bookings, track queue position, and receive notifications. Actual service delivery is
                  provided by the respective clinic/store/partner.
                </li>
                <li>
                  Partners are responsible for their availability, service quality, pricing, and policies. We do not control partner
                  operations.
                </li>
                <li>
                  Queue times are estimates and may change due to real-world conditions (no-shows, emergencies, delays, etc.).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">5. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Misuse the Service, attempt unauthorized access, or interfere with normal operations.</li>
                <li>Upload illegal, harmful, misleading, or infringing content.</li>
                <li>Reverse engineer, copy, or resell the Service except as permitted by law or written agreement.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">6. Intellectual Property</h2>
              <p>
                The Service, including its design, code, trademarks, and content (excluding user/partner-provided content), is owned by
                HarIT Tech Solution or its licensors. You receive a limited, non-exclusive, non-transferable license to use the Service for
                its intended purpose.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">7. Disclaimers</h2>
              <p>
                The Service is provided on an "as is" and "as available" basis. We do not guarantee uninterrupted operation, exact wait
                times, or partner availability. To the maximum extent permitted by law, we disclaim all warranties not expressly stated in
                these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, HarIT Tech Solution is not liable for indirect, incidental, special, consequential,
                or punitive damages arising from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">9. Termination</h2>
              <p>
                We may suspend or terminate access to the Service if we believe you have violated these Terms or if required for security,
                legal, or operational reasons.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">10. Governing Law</h2>
              <p>
                These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Maharashtra,
                India.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">11. Contact</h2>
              <p>
                If you have questions about these Terms, contact us at{' '}
                <a
                  href="mailto:harittechsolution@gmail.com"
                  className="text-brand-orange hover:text-brand-dark transition-colors"
                >
                  harittechsolution@gmail.com
                </a>
                .
              </p>
            </section>

            <div className="pt-6 border-t border-gray-200 flex flex-wrap gap-3">
              <Link to="/aaramse/privacy-policy">
                <Button variant="ghost" className="px-0">
                  Privacy Policy →
                </Button>
              </Link>
              <Link to="/aaramse/refund-policy">
                <Button variant="ghost" className="px-0">
                  Refund Policy →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AaramseTerms;

