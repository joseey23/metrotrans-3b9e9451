import { useState } from "react";
import { Calendar, Clock, MapPin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    date: "",
    time: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Booking request submitted!", {
      description: "We'll confirm your ride shortly.",
    });
    
    setFormData({
      pickupLocation: "",
      dropoffLocation: "",
      date: "",
      time: "",
      notes: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-card rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md animate-slide-in-right">
      <h3 className="text-xl font-bold text-card-foreground mb-6">
        Book your next trip
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
            Pick-up Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="City, Home, Street, etc"
              value={formData.pickupLocation}
              onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
              className="pl-10"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
            Drop-off Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="City, Airport, Station, etc"
              value={formData.dropoffLocation}
              onChange={(e) => setFormData({ ...formData, dropoffLocation: e.target.value })}
              className="pl-10"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
              Pick-up Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
              Pick-up Time
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="pl-10"
                required
              />
            </div>
          </div>
        </div>
        
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
            Special Assistance Notes
          </label>
          <div className="relative">
            <FileText className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Textarea
              placeholder="Any mobility needs, medical equipment, etc..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="pl-10 min-h-[80px] resize-none"
            />
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Book a Ride"}
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
