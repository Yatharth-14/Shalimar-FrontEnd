import React from "react";

export const ReraInfoCard = () => {
  return (
    <div className="bg-white text-gray-800 py-4 px-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between">
      {/* Left Section - QR Code */}
      <div className="mb-4 md:mb-0">
        <img
          src="/lovable-uploads/EternalHousingLogo-Photoroom.png"
          alt="Shalimar Logo"
          className="w-28 h-28 shadow-sm"
        />
      </div>

      {/* Middle Section 1 - Bank Account Details */}
      <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left mb-4 md:mb-0">
        <h3 className="text-lg font-semibold">Bank Account Details</h3>
        <p className="text-sm text-gray-600">
          Name of the Account: ANSDPL - COLL A/c- MARBELLA GH 18
        </p>
        <p className="text-sm text-gray-600">Account Number: 42952561777</p>
        <p className="text-sm text-gray-600">Bank Name: State Bank of India</p>
        <p className="text-sm text-gray-600">Branch Name: Commercial Branch</p>
      </div>

      {/* Middle Section 2 - Branch Details */}
      <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left mb-4 md:mb-0">
        <h3 className="text-lg font-semibold">Branch Details</h3>
        <p className="text-sm text-gray-600">
          Branch Address: 6A, Way Road, Gokhle Marg, Lucknow, Uttar Pradesh 226001
        </p>
        <p className="text-sm text-gray-600">Branch State: Uttar Pradesh</p>
        <p className="text-sm text-gray-600">Branch District: Lucknow</p>
        <p className="text-sm text-gray-600">IFSC Code: SBIN0004166</p>
        <p className="text-sm text-gray-600">Branch Email Address: sbi.04166@sbi.co.in</p>
      </div>

      {/* Right Section - Information and Logo */}
      <div className="flex flex-col md:flex-row items-center md:items-end gap-4 text-center md:text-left">
        {/* Information */}
        <div>
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

        {/* Logo */}
        <img
          src="/lovable-uploads/RERA Scanner.jpg"
          alt="QR Code"
          className="w-28 h-28 border-2 border-gray-300 rounded-md shadow-sm"
        />
      </div>
    </div>
  );
};