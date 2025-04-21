
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ClientDetailsFormProps {
  username: string;
}

const ClientDetailsForm = ({ username }: ClientDetailsFormProps) => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    navigate('/client/dashboard');
  };

  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Complete Your Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="your@email.com" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="Your phone number" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address / Location</Label>
          <Input id="address" placeholder="Your address" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="profile-picture">Profile Picture (Optional)</Label>
          <Input 
            id="profile-picture" 
            type="file" 
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setProfileImage(file);
            }}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" required />
          <label
            htmlFor="terms"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I accept the{" "}
            <a href="/terms" className="text-green-600 hover:underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-green-600 hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>

        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
          Complete Sign Up
        </Button>
      </form>
    </div>
  );
};

export default ClientDetailsForm;
