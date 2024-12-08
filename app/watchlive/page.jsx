"use client";

import React, { useState } from "react";

const WatchLive = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-full text-black">
      {/* LOVE TO ALL */}
      <div className="w-full bg-white text-center py-2 font-bold text-lg capitalize">
        LOVE TO ALL
      </div>

      {/* Player Container */}
      {activeTab === 1 && (
        <div className="flex justify-center mt-4">
          <iframe
            src="https://cinebuzz.netfy.live/crichd/play.php?cricid=willowusa"
            width="90%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] sm:w-[80%] lg:w-[70%] xl:w-[60%]"
          ></iframe>
        </div>
      )}
      {activeTab === 2 && (
        <div className="flex justify-center mt-4">
          <iframe
            src="https://cinebuzz.netfy.live/crichd/play.php?cricid=willowusa"
            width="90%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] sm:w-[80%] lg:w-[70%] xl:w-[60%]"
          ></iframe>
        </div>
      )}
      {activeTab === 3 && (
        <div className="flex justify-center mt-4">
          <iframe
            src="https://cinebuzz.netfy.live/crichd/play.php?cricid=willowusa"
            width="90%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] sm:w-[80%] lg:w-[70%] xl:w-[60%]"
          ></iframe>
        </div>
      )}

      {/* Bookmark It */}
      <div className="w-full bg-white text-center py-2 font-bold text-lg capitalize mt-4">
        Bookmark It👇 to Stay With Us
      </div>

      {/* BPL Link */}
      <div className="w-full bg-white text-center py-2 font-bold text-lg capitalize mt-2">
        BPL25.NETLIFY.APP
      </div>

      {/* Buttons Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 px-4">
        {["Star Sports Hindi", "Star Sports English", "A Sports HD"].map(
          (label, index) => (
            <button
              key={index}
              className={`relative py-3 px-6 font-bold rounded-lg text-lg overflow-hidden group ${
                activeTab === index + 1
                  ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white scale-105"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => handleTabClick(index + 1)}
            >
              {/* Gradient Background Fill on Hover */}
              <span
                className={`absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-purple-800 group-hover:opacity-100 opacity-0 transition-all duration-300 ease-out`}
              ></span>
              {/* Button Label Reveal */}
              <span
                className={`relative z-10 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 opacity-0 translate-x-4`}
              >
                {label}
              </span>
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default WatchLive;
