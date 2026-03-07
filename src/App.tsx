import { useEffect, useState } from "react";
import { MessageCircle, PhoneCall } from "lucide-react";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/* ---------------- WHATSAPP FLOAT BUTTON ---------------- */

const WhatsAppFloat = () => {
  const number = "918408811234";

  const message = encodeURIComponent(
    "Hello Mangalam Construction, I would like to enquire about your services."
  );

  return (
    <a
      href={`https://wa.me/${number}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition"
    >
      <MessageCircle size={26} />
    </a>
  );
};

/* ---------------- CALL BUTTON ---------------- */

const CallButton = () => {
  return (
    <a
      href="tel:+918408811234"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition"
    >
      <PhoneCall size={18} />
      Call Now
    </a>
  );
};

/* ---------------- EXIT INTENT POPUP ---------------- */

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10) {
        setShow(true);
      }
    };

    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl p-8 max-w-md text-center shadow-xl">

        <h3 className="text-2xl font-bold mb-3">
          Wait! Get a Free Consultation
        </h3>

        <p className="text-gray-600 mb-6">
          Before leaving, speak directly with our construction expert.
        </p>

        <a
          href="tel:+918408811234"
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold"
        >
          Call Now
        </a>

        <button
          onClick={() => setShow(false)}
          className="block mx-auto mt-4 text-sm text-gray-500"
        >
          Close
        </button>

      </div>

    </div>
  );
};

/* ---------------- MAIN APP ---------------- */

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Conversion Tools */}
        <WhatsAppFloat />
        <CallButton />
        <ExitIntentPopup />

      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;