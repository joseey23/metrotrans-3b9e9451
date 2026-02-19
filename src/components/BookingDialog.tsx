import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";

interface BookingDialogProps {
  trigger?: React.ReactNode;
}

const BookingDialog = ({ trigger }: BookingDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold">
            Book a Ride
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Book a Ride</DialogTitle>
        </DialogHeader>
        <BookingForm />
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
