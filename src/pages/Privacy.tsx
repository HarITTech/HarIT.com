import React from 'react';

const Privacy = () => {
  return (
    <div className="bg-brand-bg py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-3">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: March 12, 2026</p>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              This Privacy Policy explains how HarIT Tech Solution collects, uses, and protects your information when
              you visit our website or contact us for services.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Information We Collect</h2>
              <p>
                We may collect contact details (such as name, email, phone), project information you submit, and
                basic usage data (such as pages viewed or device/browser data).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">How We Use Information</h2>
              <p>
                We use your information to respond to inquiries, provide and improve services, communicate updates,
                and maintain the security and performance of our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Sharing of Information</h2>
              <p>
                We do not sell your personal information. We may share limited data with trusted service providers
                (such as hosting or email services) solely to deliver our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Cookies and Analytics</h2>
              <p>
                Our website may use cookies or similar technologies to improve functionality and understand usage
                trends. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Data Retention</h2>
              <p>
                We retain personal information only as long as needed to fulfill the purposes described here or to
                meet legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Security</h2>
              <p>
                We implement reasonable safeguards to protect your information. No method of transmission or storage
                is 100% secure, so we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Your Choices</h2>
              <p>
                You can request access, correction, or deletion of your personal information by contacting us. We
                will respond within a reasonable timeframe.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Third-Party Links</h2>
              <p>
                Our website may link to external sites. We are not responsible for the privacy practices of those
                websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Contact</h2>
              <p>
                If you have questions about this Privacy Policy, contact us at{' '}
                <a
                  href="mailto:harittechsolution@gmail.com"
                  className="text-brand-orange hover:text-brand-dark transition-colors"
                >
                  harittechsolution@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
