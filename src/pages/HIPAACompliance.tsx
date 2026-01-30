import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, FileCheck, Users } from "lucide-react";
import metrotransLogo from "@/assets/metrotrans-logo.png";

const HIPAACompliance = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">HIPAA Compliance</h1>
        <p className="text-muted-foreground mb-8">Our Commitment to Protecting Your Health Information</p>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <div className="flex items-start gap-4 p-4 bg-accent rounded-lg">
            <Shield className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">HIPAA Compliant</h3>
              <p className="text-sm text-muted-foreground">Full compliance with federal privacy regulations</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-accent rounded-lg">
            <Lock className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Secure Systems</h3>
              <p className="text-sm text-muted-foreground">Encrypted data storage and transmission</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-accent rounded-lg">
            <Users className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Trained Staff</h3>
              <p className="text-sm text-muted-foreground">All employees receive HIPAA training</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-accent rounded-lg">
            <FileCheck className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Regular Audits</h3>
              <p className="text-sm text-muted-foreground">Ongoing compliance monitoring and reviews</p>
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">What is HIPAA?</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Health Insurance Portability and Accountability Act (HIPAA) is a federal law that 
              establishes national standards for protecting sensitive patient health information. As a 
              non-emergency medical transportation provider, MetroTrans is committed to full compliance 
              with HIPAA regulations to ensure your Protected Health Information (PHI) remains secure 
              and confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Our HIPAA Compliance Program</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              MetroTrans has implemented a comprehensive HIPAA compliance program that includes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Privacy Officer:</strong> A designated Privacy Officer oversees all aspects of our HIPAA compliance program</li>
              <li><strong>Written Policies:</strong> Detailed policies and procedures governing the use and disclosure of PHI</li>
              <li><strong>Employee Training:</strong> All staff receive initial and ongoing HIPAA training</li>
              <li><strong>Business Associate Agreements:</strong> Contracts with all vendors who may access PHI</li>
              <li><strong>Incident Response:</strong> Procedures for responding to potential privacy breaches</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Protected Health Information (PHI)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In the context of our transportation services, PHI may include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Your name and contact information</li>
              <li>Medical appointment details and healthcare provider information</li>
              <li>Mobility requirements and medical conditions relevant to transport</li>
              <li>Insurance and billing information</li>
              <li>Transportation records and scheduling information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">How We Protect Your Information</h2>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Administrative Safeguards</h3>
                <p className="text-muted-foreground text-sm">
                  Workforce training, access controls, security management processes, and contingency planning
                </p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Physical Safeguards</h3>
                <p className="text-muted-foreground text-sm">
                  Secure facilities, workstation security, device and media controls
                </p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Technical Safeguards</h3>
                <p className="text-muted-foreground text-sm">
                  Access controls, audit controls, integrity controls, and transmission security (encryption)
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Your Rights Under HIPAA</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a patient, you have the following rights regarding your health information:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Right to Access:</strong> You can request copies of your health information</li>
              <li><strong>Right to Amend:</strong> You can request corrections to inaccurate information</li>
              <li><strong>Right to Accounting:</strong> You can request a list of disclosures we've made</li>
              <li><strong>Right to Restrict:</strong> You can request restrictions on certain uses of your information</li>
              <li><strong>Right to Confidential Communications:</strong> You can request that we communicate with you in a specific way</li>
              <li><strong>Right to Complain:</strong> You can file a complaint if you believe your rights have been violated</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Reporting Concerns</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have concerns about how your health information is being handled, or if you believe 
              there has been a privacy breach, please contact our Privacy Officer immediately. You also 
              have the right to file a complaint with the U.S. Department of Health and Human Services 
              Office for Civil Rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Contact Our Privacy Officer</h2>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-foreground font-medium">MetroTrans Medical Transportation</p>
              <p className="text-foreground font-medium">HIPAA Privacy Officer</p>
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

export default HIPAACompliance;
