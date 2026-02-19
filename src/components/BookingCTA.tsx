import { Phone } from "lucide-react";
import BookingDialog from "@/components/BookingDialog";

const BookingCTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Book Your Ride?
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
          Schedule your non-emergency medical transport now or call us for immediate assistance.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <BookingDialog
            trigger={
              <button className="bg-background hover:bg-background/90 text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg cursor-pointer">
                Book a Ride
              </button>
            }
          />
          <a
            href="tel:+12159803355"
            className="flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/10 transition-all"
          >
            <Phone className="h-5 w-5" />
            (215) 980-3355
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
