import React, { useState, useEffect } from 'react';

const WatchLive = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
    setIsLoading(true);
    setHasError(false); // Reset error state on tab change
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading delay

    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="w-full text-black">
      <div className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-center py-2 font-bold text-lg text-white capitalize">
        💟 LOVE TO ALL 💟
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-gray-900 border-r-4 border-b-4 border-transparent 
          "></div> 
        </div>
      ) : hasError ? (
        <div className="flex justify-center items-center h-screen">
          <p className="text-center text-red-500">
            Error loading stream. Please try again later.
          </p>
        </div>
      ) : (
        <div className="flex justify-center mt-0">
          {activeTab === 1 && (
            <iframe
              src="https://cinebuzz.netfy.live/stream/tsportsjadoo.html"
              width="100%"
              height="540"
              frameBorder="0"
              allowFullScreen={true}
              className="aspect-video object-fill w-[100%] h-[56.25%] sm:w-[80%] lg:w-[70%] xl:w-[60%]"
              onLoad={() => setIsLoading(false)}
              onError={() => setHasError(true)} 
            />
          )}
          {/* ... other iframe components with onLoad and onError handlers ... */}
        </div>
      )}

      <div className="w-full bg-gray-800 text-center py-1 font-bold text-base text-white capitalize mt-0">
        Bookmark It👇 to Stay With Us
      </div>

      <div className="w-full bg-gray-800 text-center py-1 font-bold text-base text-white capitalize mt-0">
        BPL25.NETLIFY.APP
      </div>

      <div className="flex justify-center mt-3 px-3">
        <div className="bg-gray-800 p-4 rounded-lg w-full sm:w-[95%] lg:w-[65%] xl:w-[55%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {["Tsports-Jadoo", "Sky Sports Cricket", "Willow", "Ten Cricket"].map(
              (label, index) => (
                <button
                  key={index}
                  className={`w-full py-2 text-base font-bold rounded-md transition-all duration-300 ${
                    activeTab === index + 1
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md transform scale-105"
                      : "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-100"
                  }`}
                  onClick={() => handleTabClick(index + 1)}
                >
                  {label}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchLive;
