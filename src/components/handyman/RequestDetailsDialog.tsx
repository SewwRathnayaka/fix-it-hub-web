
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface RequestDetailsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  request: {
    id: string;
    title: string;
    client: string;
    address: string;
    time: string;
    note: string;
  };
}

const RequestDetailsDialog = ({ open, onOpenChange, request }: RequestDetailsProps) => {
  const navigate = useNavigate();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Request Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">{request.title}</h3>
            <p className="text-sm text-gray-500">Request ID: {request.id}</p>
          </div>

          <div className="space-y-2">
            <div>
              <label className="text-sm font-medium text-gray-500">Client</label>
              <p className="text-gray-900">{request.client}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Location</label>
              <p className="text-gray-900">{request.address}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Preferred Time</label>
              <p className="text-gray-900">{request.time}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Additional Notes</label>
              <p className="text-gray-900">{request.note}</p>
            </div>
          </div>

          <div className="flex justify-between gap-4 pt-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
            <Button
              className="flex-1 gap-2"
              onClick={() => navigate(`/handyman/chat/${request.id}`)}
            >
              <MessageSquare className="h-4 w-4" />
              Chat with Client
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RequestDetailsDialog;
