import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+918010702010";
    const message = "Hi! I'm interested in Shalimar One World. Please share more details.";
    const encodedMessage = encodeURIComponent(message);
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 pulse"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </button>
  );
};