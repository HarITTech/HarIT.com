import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const AaramsePrivacy: React.FC = () => {
  return (
    <div className="bg-brand-bg py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-2">AaramSe Privacy Policy</h1>
              <p className="text-sm text-gray-500">Last updated: March 15, 2026</p>
            </div>
            <Link to="/aaramse">
              <Button variant="outline">Back to AaramSe</Button>
            </Link>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              This Privacy Policy explains how AaramSe ("we", "us", or "our") collects, uses, and protects information when you use the
              AaramSe mobile application and related services.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold text-gray-700">Account &amp; profile data:</span> name, email, phone number, and other
                  information you provide.
                </li>
                <li>
                  <span className="font-semibold text-gray-700">Bookings &amp; queue data:</span> appointment details, queue position,
                  timestamps, and related activity.
                </li>
                <li>
                  <span className="font-semibold text-gray-700">Partner/business data:</span> store/clinic details, availability/slots,
                  branding content, and QR identifiers (for partners).
                </li>
                <li>
                  <span className="font-semibold text-gray-700">Device &amp; usage data:</span> device identifiers, app events, crash logs,
                  and basic analytics to improve performance (where enabled).
                </li>
                <li>
                  <span className="font-semibold text-gray-700">Notification data:</span> push notification tokens to deliver turn alerts
                  and booking updates.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">How We Use Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide and operate the core queue/appointment features.</li>
                <li>Send notifications related to your bookings, turns, and account.</li>
                <li>Support partners in managing slots, queues, and customer flow.</li>
                <li>Improve app performance, reliability, and user experience.</li>
                <li>Prevent abuse, fraud, and unauthorized access.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Sharing of Information</h2>
              <p>
                We do not sell your personal information. We may share limited information in the following cases:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>
                  <span className="font-semibold text-gray-700">With service providers</span> (hosting, database, messaging, analytics) only
                  to operate and improve AaramSe.
                </li>
                <li>
                  <span className="font-semibold text-gray-700">With partners you engage with</span> (clinic/store/service) to fulfill your
                  bookings and manage queues.
                </li>
                <li>
                  <span className="font-semibold text-gray-700">For legal reasons</span> when required to comply with law or protect rights,
                  safety, and security.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Permissions</h2>
              <p>AaramSe may request the following device permissions (depending on features you use):</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>
                  <span className="font-semibold text-gray-700">Notifications:</span> to alert you when it's your turn or when a booking is
                  updated.
                </li>
                <li>
                  <span className="font-semibold text-gray-700">Camera (optional):</span> to scan QR codes for faster partner onboarding or
                  check-in flows.
                </li>
                <li>
                  <span className="font-semibold text-gray-700">Location (optional):</span> to help discover nearby services (if enabled).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Data Retention</h2>
              <p>
                We retain information only as long as necessary to provide the service, comply with legal obligations, resolve disputes,
                and enforce our agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Security</h2>
              <p>
                We use reasonable safeguards to protect your information. However, no method of transmission or storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Your Choices</h2>
              <p>
                You may request access, correction, or deletion of your information by contacting us. We'll respond within a reasonable
                timeframe, subject to applicable laws and operational requirements.
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

            <div className="pt-6 border-t border-gray-200 flex flex-wrap gap-3">
              <Link to="/aaramse/terms">
                <Button variant="ghost" className="px-0">
                  Terms &amp; Conditions →
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

export default AaramsePrivacy;
