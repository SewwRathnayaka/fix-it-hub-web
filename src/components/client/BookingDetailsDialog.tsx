
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Calendar, Clock, MapPin, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface BookingDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingDetailsDialog = ({ open, onOpenChange }: BookingDetailsDialogProps) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  
  const handleContinue = () => {
    // Basic validation
    if (!date || !time || !address.trim() || !description.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Submit booking data
    console.log("Booking details:", { date, time, address, description });
    
    toast({
      title: "Booking submitted!",
      description: "Your booking details have been sent.",
    });
    
    // Close the dialog
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <button 
            onClick={() => onOpenChange(false)}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Booking Details
          </button>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-2">Select Date & Time</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Input 
                  type="date" 
                  placeholder="mm/dd/yyyy"
                  className="pl-10"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              </div>
              <div className="relative">
                <Input 
                  type="time"
                  placeholder="Select time"
                  className="pl-10"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
                <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Service Location</h3>
            <div className="relative">
              <Input 
                type="text"
                placeholder="Enter your complete address"
                className="pl-10"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Describe Your Problem</h3>
            <Textarea 
              placeholder="Please describe the issue you're facing..."
              className="min-h-[100px]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Upload Photos (Optional)</h3>
            <div className={cn(
              "border-2 border-dashed rounded-lg p-6",
              "text-center cursor-pointer hover:border-gray-400 transition-colors"
            )}>
              <Upload className="h-6 w-6 mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-500">Drag and drop photos here or click to upload</p>
              <p className="text-xs text-green-500 mt-1">Browse Files</p>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button 
              className="bg-orange-500 hover:bg-orange-600"
              onClick={handleContinue}
            >
              Continue to Review
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDetailsDialog;
