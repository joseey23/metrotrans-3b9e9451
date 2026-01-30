import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import metrotransLogo from "@/assets/metrotrans-logo.png";

const TermsOfService = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last Updated: January 30, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By using MetroTrans Medical Transportation services ("Services"), you agree to be bound by 
              these Terms of Service. If you do not agree to these terms, please do not use our Services. 
              We reserve the right to modify these terms at any time, and your continued use of our 
              Services constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Description of Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              MetroTrans provides non-emergency medical transportation (NEMT) services including but not 
              limited to transportation for medical appointments, dialysis treatments, hospital discharges, 
              and other healthcare-related transportation needs. Our services include wheelchair-accessible 
              vehicles, stretcher transportation, and ambulatory transport.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Booking and Cancellation</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Advance Booking:</strong> We recommend booking transportation at least 48 hours in advance to ensure availability.</li>
              <li><strong>Cancellation Policy:</strong> Cancellations must be made at least 24 hours before the scheduled pickup time. Late cancellations may be subject to a cancellation fee.</li>
              <li><strong>No-Shows:</strong> Failure to be present at the pickup location at the scheduled time may result in a no-show fee and affect future booking privileges.</li>
              <li><strong>Wait Time:</strong> Our drivers will wait up to 15 minutes at the pickup location. Additional wait time may incur extra charges.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Passenger Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Passengers agree to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide accurate information about their medical condition and mobility needs</li>
              <li>Be ready at the designated pickup time and location</li>
              <li>Treat drivers and vehicles with respect</li>
              <li>Follow all safety instructions provided by drivers</li>
              <li>Wear seatbelts and remain seated during transport</li>
              <li>Not smoke, consume alcohol, or use illegal substances in vehicles</li>
              <li>Report any concerns or incidents immediately</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Medical Conditions and Limitations</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are intended for non-emergency medical transportation only. We are not an 
              ambulance service and do not provide emergency medical care. Passengers must be medically 
              stable for transport. If you experience a medical emergency, please call 911 immediately. 
              We reserve the right to refuse service if we determine that a passenger requires emergency 
              medical care.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Payment Terms</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Payment is due at the time of service unless prior arrangements have been made</li>
              <li>We accept major credit cards, cash, and approved insurance</li>
              <li>Insurance coverage varies; patients are responsible for any amounts not covered</li>
              <li>Prices are subject to change with reasonable notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Liability Limitations</h2>
            <p className="text-muted-foreground leading-relaxed">
              MetroTrans maintains appropriate insurance coverage for our vehicles and operations. 
              However, we are not liable for delays caused by traffic, weather, or other circumstances 
              beyond our control. We are not responsible for missed appointments due to such delays. 
              Our liability is limited to the extent permitted by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Insurance and Compliance</h2>
            <p className="text-muted-foreground leading-relaxed">
              All MetroTrans vehicles are properly licensed, insured, and regularly inspected. Our drivers 
              are trained, background-checked, and certified to provide non-emergency medical transportation. 
              We comply with all applicable federal, state, and local regulations governing medical 
              transportation services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">9. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of 
              the Commonwealth of Pennsylvania. Any disputes arising from these terms or our services 
              shall be resolved in the courts of Delaware County, Pennsylvania.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, please contact us:
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

export default TermsOfService;
