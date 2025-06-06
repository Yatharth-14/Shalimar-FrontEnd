import { useEffect, useState } from "react";

// Define the props for the component (only apiKey is needed now)
interface LocationAdvantagesProps {
  apiKey: string; // Google Maps API Key
}

export const LocationAdvantages = ({ apiKey }: LocationAdvantagesProps) => {
  const [mapError, setMapError] = useState<string | null>(null);

  // Hardcoded data for Shalimar Marbella
  const lat = 26.9124; // Approximate coordinates for Gomti Nagar, Lucknow
  const lng = 80.9431;
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

  // Load Google Maps script and initialize the map
  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initMap();
        return;
      }

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.onload = () => {
        if (window.google && window.google.maps) {
          initMap();
        } else {
          setMapError("Failed to load Google Maps API. Please check your API key.");
        }
      };
      script.onerror = () => {
        setMapError("Error loading Google Maps API. Please check your network or API key.");
      };
      document.body.appendChild(script);
    };

    const initMap = () => {
      const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat, lng },
        zoom: 14,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      });

      new google.maps.Marker({
        position: { lat, lng },
        map,
        title: locationName,
      });
    };

    loadGoogleMaps();

    return () => {
      const script = document.querySelector(`script[src^="https://maps.googleapis.com/maps/api/js"]`);
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [apiKey]);

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
      <h2 className="text-2xl font-bold text-yellow-600 mb-4">LOCATION ADVANTAGES</h2>
      {mapError ? (
        <div className="text-red-500 p-4 bg-red-100 rounded-lg">
          {mapError}
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-4">
          {/* Map Section */}
          <div className="w-full md:w-2/3 h-96 relative">
            <div id="map" className="w-full h-full rounded-lg shadow-md"></div>
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
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm hover:underline"
              >
                View on map
              </a>
            </div>
          </div>

          {/* Location Advantages List */}
          
          <div className="w-full md:w-1/3 bg-yellow-600 text-white p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                  <span className="text-sm">
                    {advantage.name} - {advantage.distance}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
    </section>
  );
};

