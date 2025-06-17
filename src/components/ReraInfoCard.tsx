import React from "react";

export const ReraInfoCard = () => {
  return (
    <div className="bg-white text-gray-800 py-4 px-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between ">
      {/* Left Section - QR Code */}
      <div className="mb-4 md:mb-0">
        <img
          src="/lovable-uploads/RERA Scanner.jpg" // Replace with actual QR code image URL or base64 if available
          alt="QR Code"
          className="w-28 h-28 border-2 border-gray-300 rounded-md shadow-sm"
        />
      </div>

      {/* Right Section - Information */}
      <div className="text-center md:text-right">
        <h2 className="text-xl font-semibold mb-1">Pulkit Sethi</h2>
        <p className="text-sm text-gray-600">Authorised Channel Partner</p>
        <p className="text-sm">
          Rera No: <span className="font-medium">UPRERAAGT25269</span>
        </p>
        <p className="text-sm">
          Project Rera No:{" "}
          <span className="font-medium">UPRERAPRJ460592/05/2024</span>
        </p>
        <a
          href="https://www.up-rera.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:text-blue-800 underline transition-colors"
        >
          Rera Website: www.up-rera.in
        </a>
      </div>
    </div>
  );
};
