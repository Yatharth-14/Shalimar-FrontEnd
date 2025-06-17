import React from "react";

export const LocationAdvantages = () => {
  // Hardcoded data for Shalimar Marbella
  const locationName = "Shalimar Marbella";
  const address = "GH18, Gomti Nagar, Badhamau, Lucknow, Uttar Pradesh 226001";
  const rating = 5.0;
  const reviews = 1;
  const advantages = [
    { name: "GOMTI NAGAR RAILWAY STATION", distance: "3.7 KM" },
    { name: "PHOENIX PALASSIO", distance: "800 METER" },
    { name: "IIT CHAK GANJARIA", distance: "2.7 KM" },
    { name: "JANESHWAR MISHRA PARK", distance: "5.7 KM" },
    { name: "S.D.S.N. PUBLIC SCHOOL", distance: "6.3 KM" },
    { name: "INTERNATIONAL AIRPORT", distance: "20 KM" },
    { name: "TENDER PALM HOSPITAL", distance: "1.6 KM" },
    { name: "HCL IT CITY", distance: "2.9 KM" },
    { name: "THE PALMS GOLF CLUB & RESORT", distance: "6.2 KM" },
    { name: "LUCKNOW JUNCTION", distance: "14 KM" },
  ];

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section id="amenities" className="py-20 px-4 bg-[#F5E6CC] dark:bg-[#2A2520]">
      <div className="w-full max-w-5xl mx-auto p-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C34] dark:text-[#D4A017] mb-4 text-center">
          Location Advantages
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Image Section */}
          <div className="w-full md:w-2/3 h-96 relative">
            <a
              href="https://www.google.com/maps/place/Shalimar+Marbella/@26.8292447,81.0177878,15z/data=!4m6!3m5!1s0x399be3eb5e4af5d7:0x5ea1adbb18d4ee2a!8m2!3d26.8300206!4d81.026344!16s%2Fg%2F11w3cjhqm4?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../lovable-uploads/GoogleMap.png" // Replace with actual image URL
                alt="Shalimar Marbella Location Map"
                className="w-full h-full object-cover rounded-2xl shadow-md transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </a>
            {/* Location Card Overlay */}
            <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <h3 className="text-lg font-semibold text-gray-800">{locationName}</h3>
              <p className="text-sm text-gray-600">{address}</p>
              <div className="flex items-center mt-1">
                {renderStars(rating)}
                <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
              </div>
              <p className="text-sm text-blue-500 mt-1">
                {reviews} review{reviews !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {/* Location Advantages List */}
          <div className="bg-yellow-600 text-white p-4 rounded-lg shadow-md">
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                  <span className="text-sm w-[300px]">
                    {advantage.name} - {advantage.distance}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};