
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Wrench, Droplet, Lightbulb, PaintBucket, HardHat, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const ServiceCard = ({ title, description, icon, image }: ServiceCardProps) => {
  const navigate = useNavigate();

  // On Book Service, go to Select Role Signup
  const handleBook = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/select-role?action=signup");
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h3 className="text-xl font-bold text-white uppercase">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-purple-100 p-2 rounded-full mr-3">
            {icon}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-center">
          <Button className="bg-orange-500 hover:bg-orange-600" onClick={handleBook}>
            Book Service
          </Button>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Plumbing",
      description: "Expert plumbing services for leak repairs, pipe installations, toilet repairs, and more.",
      icon: <Droplet className="h-5 w-5 text-purple-600" />,
      image: "public/lovable-uploads/a6fd3ec1-585e-4685-bc74-26d201fb00b6.png"
    },
    {
      title: "Electrical",
      description: "Professional electrical services for installations, repairs, wiring, switches, and outlets.",
      icon: <Lightbulb className="h-5 w-5 text-purple-600" />,
      image: "public/lovable-uploads/d90e9dea-d454-4da2-a4ee-b5190ec3cb0e.png"
    },
    {
      title: "Carpentry",
      description: "Skilled carpentry for furniture assembly, custom builds, repairs, and woodworking projects.",
      icon: <Wrench className="h-5 w-5 text-purple-600" />,
      image: "public/lovable-uploads/3605cbc1-3484-439e-9e60-44ecd68d164e.png"
    },
    {
      title: "Painting",
      description: "Quality painting services for interior and exterior walls, trim, doors, and decorative finishes.",
      icon: <PaintBucket className="h-5 w-5 text-purple-600" />,
      image: "public/lovable-uploads/404a883c-6523-4403-a00f-272976243f6f.png"
    },
    {
      title: "Home Repairs",
      description: "General home repairs including drywall patching, door adjustments, and hardware installation.",
      icon: <Home className="h-5 w-5 text-purple-600" />,
      image: "public/lovable-uploads/f1ac4051-e1a6-4dde-a3f7-f065c2486f55.png" 
    },
    {
      title: "Renovations",
      description: "Small to medium renovation projects for kitchens, bathrooms, basements, and other spaces.",
      icon: <HardHat className="h-5 w-5 text-purple-600" />,
      image: "public/lovable-uploads/c9966b20-1738-4ad6-8ec2-cced8d1e3122.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="relative bg-gray-900 py-24">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
            style={{ 
              backgroundImage: "url('public/lovable-uploads/404a883c-6523-4403-a00f-272976243f6f.png')",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 0, 0.6)"
            }}
          />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              EXPLORE OUR WIDE RANGE OF SERVICES
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whatever your home maintenance or repair needs, our team of skilled handymen are ready to help
            </p>
          </div>
        </div>
        
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard 
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  image={service.image}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Removed: Need a Custom Service section */}
      </main>
      <Footer />
    </div>
  );
};

export default Services;
