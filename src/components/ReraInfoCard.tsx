import React from "react";

export const ReraInfoCard = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 text-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col gap-6 transition-all duration-300 hover:shadow-xl">
      {/* Header with Logos and Bank Details */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Logo with subtle shine effect */}
        <div className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
          <img
            src="/lovable-uploads/EternalHousingLogo-Photoroom.png"
            alt="Shalimar Logo"
            className="w-28 h-28 object-contain"
          />
        </div>

        {/* Bank Details in elegant card */}
        <div className="flex-1">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-center text-gray-700 pb-2 mb-3 border-b border-gray-200 relative">
              <span className="absolute left-0 bottom-0 h-0.5 w-1/3 bg-blue-500"></span>
              <span className="absolute left-1/3 bottom-0 h-0.5 w-1/3 bg-green-500"></span>
              <span className="absolute right-0 bottom-0 h-0.5 w-1/3 bg-orange-500"></span>
              Bank Account Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="space-y-1">
                <p className="font-medium text-gray-600">Account Name:</p>
                <p className="text-gray-700">ANSDPL - COLL A/c- MARBELLA GH 18</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-gray-600">Account Number:</p>
                <p className="text-gray-700">42952561777</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-gray-600">Bank Name:</p>
                <p className="text-gray-700">State Bank of India</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-gray-600">Branch Name:</p>
                <p className="text-gray-700">Commercial Branch</p>
              </div>
              <div className="space-y-1 md:col-span-2">
                <p className="font-medium text-gray-600">Branch Address:</p>
                <p className="text-gray-700">6A, Way Road, Gokhle Marg, Lucknow, Uttar Pradesh 226001</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-gray-600">IFSC Code:</p>
                <p className="text-gray-700 font-mono">SBIN0004166</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Logo with QR Code */}
        <div className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
          <img
            src="/lovable-uploads/RERA Scanner.jpg"
            alt="QR Code"
            className="w-28 h-28 border-2 border-gray-200 rounded-md object-contain"
          />
        </div>
      </div>

      {/* RERA Information Section */}
      <div className="bg-blue-50/50 rounded-lg p-4 border border-blue-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Pulkit Sethi
            </h2>
            <p className="text-sm text-gray-600 mt-1">Authorised Channel Partner</p>
          </div>

          <div className="text-center md:text-left space-y-1">
            <p className="text-sm">
              <span className="font-medium text-gray-600">Rera No:</span>{" "}
              <span className="font-medium text-blue-700">UPRERAAGT25269</span>
            </p>
            <p className="text-sm">
              <span className="font-medium text-gray-600">Project Rera No:</span>{" "}
              <span className="font-medium text-blue-700">UPRERAPRJ460592/05/2024</span>
            </p>
            <a
              href="https://www.up-rera.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-blue-600 hover:text-blue-800 underline transition-colors mt-1"
            >
              Rera Website: www.up-rera.in
            </a>
          </div>
        </div>
      </div>

      {/* Official Stamp/Signature Area (optional) */}
      {/* <div className="text-center text-xs text-gray-500 mt-2 border-t border-gray-200 pt-3">
        <p>This is an official document - For verification purposes only</p>
      </div> */}
    </div>
  );
};