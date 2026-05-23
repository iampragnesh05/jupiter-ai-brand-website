export default function TermsOfService() {
  return (
    <>
      <section className="py-32 md:py-24 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-8">Terms of Service</h1>
          <p className="text-muted mb-8">Last updated: May 2026</p>

          <div className="space-y-8 text-muted">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">Use of service</h2>
              <p>
                By accessing or using Jupiter AI's services, you agree to these Terms of Service. Our services are designed for legitimate businesses operating in India. You must be at least 18 years old to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Account responsibilities</h2>
              <p className="mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Ensuring the accuracy of information you provide</li>
                <li>Complying with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Data and privacy</h2>
              <p>
                Your use of our services is also governed by our Privacy Policy. By using our services, you consent to our data practices as described in the Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Payment terms</h2>
              <p className="mb-4">
                For paid services:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Payments are processed securely through our payment providers</li>
                <li>Subscription fees are billed in advance</li>
                <li>Prices are in INR and include applicable taxes</li>
                <li>Refunds are handled on a case-by-case basis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Cancellation</h2>
              <p>
                You may cancel your subscription at any time. Cancellation will take effect at the end of your current billing period. No refunds for partial months.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Limitation of liability</h2>
              <p>
                Jupiter AI provides services "as is" without warranties of any kind. We are not liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Changes to terms</h2>
              <p>
                We may update these terms from time to time. We will notify you of any material changes. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
              <p>
                For questions about these Terms of Service, please contact us at hello@jupiter-ai.co
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
