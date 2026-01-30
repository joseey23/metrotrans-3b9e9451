import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import metrotransLogo from "@/assets/metrotrans-logo.png";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-hero py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img 
                src={metrotransLogo} 
                alt="MetroTrans" 
                className="h-10 w-auto"
              />
            </Link>
            <Link 
              to="/" 
              className="flex items-center gap-2 text-hero-text/80 hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: January 30, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              MetroTrans Medical Transportation ("we," "our," or "us") is committed to protecting your privacy 
              and ensuring the security of your personal and health information. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you use our non-emergency 
              medical transportation services or visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Personal Information:</strong> Name, address, phone number, email address, date of birth</li>
              <li><strong>Health Information:</strong> Medical conditions relevant to transportation needs, mobility requirements, special accommodations needed</li>
              <li><strong>Insurance Information:</strong> Insurance provider, policy numbers, Medicare/Medicaid information</li>
              <li><strong>Transportation Details:</strong> Pickup and drop-off locations, appointment times, healthcare provider information</li>
              <li><strong>Payment Information:</strong> Billing address, payment method details</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Schedule and provide non-emergency medical transportation services</li>
              <li>Communicate with you about your transportation appointments</li>
              <li>Coordinate with healthcare providers regarding your transportation needs</li>
              <li>Process payments and insurance claims</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Improve our services and customer experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Healthcare providers and facilities for coordination of care</li>
              <li>Insurance companies for billing and claims processing</li>
              <li>Government agencies as required by law</li>
              <li>Service providers who assist in our operations (under strict confidentiality agreements)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal and 
              health information against unauthorized access, alteration, disclosure, or destruction. 
              This includes encryption, secure servers, and regular security assessments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Access your personal information we hold</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>File a complaint with regulatory authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-foreground font-medium">MetroTrans Medical Transportation</p>
              <p className="text-muted-foreground">Newtown Square, PA 19073</p>
              <p className="text-muted-foreground">Phone: (215) 980-3355</p>
              <p className="text-muted-foreground">Email: info@metrotrans.org</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
