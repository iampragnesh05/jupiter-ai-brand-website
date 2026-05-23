export default function PrivacyPolicy() {
  return (
    <>
      <section className="py-32 md:py-24 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-8">Privacy Policy</h1>
          <p className="text-muted mb-8">Last updated: May 2026</p>

          <div className="space-y-8 text-muted">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">What data we collect</h2>
              <p className="mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Email address when you sign up for our waitlist or products</li>
                <li>Business information when you submit an idea for Jupiter Build</li>
                <li>Contact information when you reach out to us</li>
                <li>Google Search Console and Analytics data (only when you explicitly connect)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">How we use your data</h2>
              <p className="mb-4">
                We use your data to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide and improve our AI products</li>
                <li>Send product updates and relevant communications</li>
                <li>Analyze usage patterns to improve our services</li>
                <li>Respond to your inquiries and support requests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Google OAuth data</h2>
              <p>
                When you connect your Google account (Search Console or Analytics), we access only the data you explicitly authorize. You can revoke this access at any time through your Google Account settings. We never store your Google password.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Data storage and security</h2>
              <p>
                Your data is stored securely on encrypted servers. We use industry-standard security measures to protect your information. We retain your data only as long as necessary to provide our services or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Your rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access the data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Contact for privacy concerns</h2>
              <p>
                If you have questions about this Privacy Policy or how we handle your data, please contact us at hello@jupiter-ai.co
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
