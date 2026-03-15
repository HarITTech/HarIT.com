import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const AaramseRefund: React.FC = () => {
  return (
    <div className="bg-brand-bg py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-2">AaramSe Refund Policy</h1>
              <p className="text-sm text-gray-500">Last updated: March 15, 2026</p>
            </div>
            <Link to="/aaramse">
              <Button variant="outline">Back to AaramSe</Button>
            </Link>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              This Refund Policy describes how refunds (if applicable) are handled for purchases or paid features related to AaramSe.
              Because AaramSe may be offered in different modes (free, paid, partner-paid, or subscription) depending on the region and
              rollout stage, the exact refund outcome can vary.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Google Play Purchases</h2>
              <p>
                If you purchase AaramSe or any paid feature via Google Play, refunds are generally processed according to Google Play's
                refund policies and your purchase method. Please check your Google Play order history for available options.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Subscriptions &amp; Digital Services</h2>
              <p>
                For subscription-based access (if introduced), charges are typically non-refundable once the billing cycle has started,
                except where required by law or explicitly stated otherwise at the time of purchase.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Partner/Service Provider Charges</h2>
              <p>
                AaramSe helps you book and manage queues with third-party partners (clinics/stores/service centers). Any service fees,
                cancellation fees, or partner-specific refund terms are determined by the respective partner.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">How to Request Help</h2>
              <p>
                If you believe you were charged incorrectly or need help with a payment issue, contact us with your purchase details (date,
                amount, and transaction reference if available).
              </p>
              <p className="mt-2">
                Email:{' '}
                <a
                  href="mailto:harittechsolution@gmail.com"
                  className="text-brand-orange hover:text-brand-dark transition-colors"
                >
                  harittechsolution@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Policy Updates</h2>
              <p>
                We may update this Refund Policy as the product evolves. We will post updates on this page with a revised "Last updated"
                date.
              </p>
            </section>

            <div className="pt-6 border-t border-gray-200 flex flex-wrap gap-3">
              <Link to="/aaramse/privacy-policy">
                <Button variant="ghost" className="px-0">
                  Privacy Policy →
                </Button>
              </Link>
              <Link to="/aaramse/terms">
                <Button variant="ghost" className="px-0">
                  Terms &amp; Conditions →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AaramseRefund;
