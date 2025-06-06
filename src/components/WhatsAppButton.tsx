import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+91 8010702010"; // Replace with actual WhatsApp number
    const message =
      "Hi! I'm interested in Shalimar One World. Please share more details.";
    const encodedMessage = encodeURIComponent(message);

    // Check if user is on mobile device
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    let whatsappUrl;
    if (isMobile) {
      // For mobile devices, use the app protocol
      whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    } else {
      // For desktop/browser, use web.whatsapp.com
      whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    }

    // Try to open WhatsApp app first, fallback to web version
    const link = document.createElement("a");
    link.href = whatsappUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    // For mobile, try app first, then fallback to web if app doesn't open
    if (isMobile) {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Fallback to web version after a short delay if app doesn't open
      setTimeout(() => {
        const webUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        window.open(webUrl, "_blank", "noopener,noreferrer");
      }, 2000);
    } else {
      // For desktop, open web version directly
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};
