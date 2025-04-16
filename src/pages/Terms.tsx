const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-black">Terms & Privacy</h1>
        <div className="max-w-3xl mx-auto space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Terms of Service</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                By accessing and using TeamUp, you agree to be bound by these Terms of Service. Please read them carefully.
              </p>
              <h3 className="font-medium text-black">1. User Responsibilities</h3>
              <p>
                Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.
              </p>
              <h3 className="font-medium text-black">2. Content Guidelines</h3>
              <p>
                Users must not post or share content that is illegal, harmful, threatening, abusive, or otherwise objectionable.
              </p>
              <h3 className="font-medium text-black">3. Intellectual Property</h3>
              <p>
                All content on TeamUp is protected by intellectual property rights. Users retain ownership of their content but grant TeamUp a license to use it.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Privacy Policy</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.
              </p>
              <h3 className="font-medium text-black">1. Information We Collect</h3>
              <p>
                We collect information you provide directly to us, such as your name, email address, and profile information.
              </p>
              <h3 className="font-medium text-black">2. How We Use Your Information</h3>
              <p>
                We use your information to provide and improve our services, communicate with you, and ensure the security of our platform.
              </p>
              <h3 className="font-medium text-black">3. Data Security</h3>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.
              </p>
              <h3 className="font-medium text-black">4. Your Rights</h3>
              <p>
                You have the right to access, correct, or delete your personal information. You can also opt-out of certain communications.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms & Privacy, please contact us at legal@teamup.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms; 