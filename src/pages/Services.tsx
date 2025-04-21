import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Services = () => {
  const navigate = useNavigate();

  // Handle Book Service click to redirect to sign up as requested
  const handleBookService = () => {
    navigate("/select-role?action=signup");
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>
        {/* Services listing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 1, name: "Plumbing", description: "Fix leaks and plumbing issues" },
            { id: 2, name: "Electrical", description: "Electrical repairs and installation" },
            { id: 3, name: "Carpentry", description: "Woodwork and carpentry services" },
          ].map((service) => (
            <div key={service.id} className="border rounded-lg p-4 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <button
                onClick={handleBookService}
                className="bg-[#FF8000] hover:bg-[#e67300] text-white px-4 py-2 rounded"
              >
                Book Service
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Services;
