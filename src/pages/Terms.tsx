import React from 'react';

const Terms = () => {
  return (
    <div className="bg-brand-bg py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-3">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: March 12, 2026</p>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              These Terms of Service ("Terms") govern your access to and use of the HarIT Tech Solution website and
              services. By accessing our site or engaging our services, you agree to these Terms.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Services</h2>
              <p>
                We provide software development, consulting, and related technology services. Specific deliverables,
                timelines, and pricing are defined in written proposals, statements of work, or contracts.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Client Responsibilities</h2>
              <p>
                You agree to provide accurate information, timely feedback, and necessary access or assets required to
                perform the services. Delays in these inputs may affect timelines.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Intellectual Property</h2>
              <p>
                Unless otherwise stated in a written agreement, we retain ownership of our pre-existing tools,
                templates, and know-how. Upon full payment, you receive rights to the project deliverables as defined
                in the relevant agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Payments</h2>
              <p>
                Payment terms are specified in the agreed proposal or contract. Late payments may result in paused
                work or delayed delivery.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Confidentiality</h2>
              <p>
                Both parties agree to protect each other’s confidential information and use it only for the purposes
                of the project.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Third-Party Links</h2>
              <p>
                Our website may include links to third-party websites. We are not responsible for their content or
                practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Disclaimer</h2>
              <p>
                Our website and services are provided "as is" without warranties of any kind, except as expressly set
                out in a written agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, HarIT Tech Solution is not liable for indirect, incidental,
                or consequential damages arising from the use of our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Termination</h2>
              <p>
                Either party may terminate engagement in accordance with the terms of the applicable agreement or
                upon written notice if no agreement exists.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Governing Law</h2>
              <p>
                These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of
                courts in Maharashtra, India.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Contact</h2>
              <p>
                For questions about these Terms, contact us at{' '}
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

export default Terms;
