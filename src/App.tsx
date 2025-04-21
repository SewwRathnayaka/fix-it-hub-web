import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import SelectRole from "./pages/SelectRole";
import ClientSignUp from "./pages/ClientSignUp";
import HandymanSignUp from "./pages/HandymanSignUp";
import ClientLogin from "./pages/ClientLogin";
import HandymanLogin from "./pages/HandymanLogin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/select-role" element={<SelectRole />} />
          <Route path="/signup/client" element={<ClientSignUp />} />
          <Route path="/signup/handyman" element={<HandymanSignUp />} />
          <Route path="/login/client" element={<ClientLogin />} />
          <Route path="/login/handyman" element={<HandymanLogin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
