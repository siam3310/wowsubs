"use client";

import React, { useState } from "react";

const WatchLive = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-full text-black">
      {/* Player Container */}
      {activeTab === 1 && (
        <div className="flex justify-center">
          <iframe
            src="https://cinebuzz.netfy.live/crichd/play.php?cricid=willowusa"
            width="90%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]"
          ></iframe>
        </div>
      )}
      {activeTab === 2 && (
        <div className="flex justify-center">
          <iframe
            src="https://cinebuzz.netfy.live/crichd/play.php?cricid=willowusa"
            width="90%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]"
          ></iframe>
        </div>
      )}
      {activeTab === 3 && (
        <div className="flex justify-center">
          <iframe
            src="https://cinebuzz.netfy.live/crichd/play.php?cricid=willowusa"
            width="90%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]"
          ></iframe>
        </div>
      )}

      {/* Buttons Container */}
      <div className="flex flex-col items-center gap-4 mt-4 sm:mx-[2rem] xl:mx-[8rem]">
        <a
          className={`tab w-full sm:w-[90%] lg:w-[70%] xl:w-[60%] text-center py-2 border rounded ${
            activeTab === 1 ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick(1)}
        >
          Star Sports Hindi
        </a>
        <a
          className={`tab w-full sm:w-[90%] lg:w-[70%] xl:w-[60%] text-center py-2 border rounded ${
            activeTab === 2 ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick(2)}
        >
          Star Sports English
        </a>
        <a
          className={`tab w-full sm:w-[90%] lg:w-[70%] xl:w-[60%] text-center py-2 border rounded ${
            activeTab === 3 ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick(3)}
        >
          A Sports HD
        </a>
      </div>

      {/* Extra Information */}
      <div className="flex justify-center min-[550px]:mt-[1rem]">
        <div className="bg-white text-center capitalize min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]">
          LOVE TO ALL
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-white text-center capitalize min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]">
          Bookmark It👇 to Stay With Us
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-white text-center w-full capitalize min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]">
          <div className="text-xl ">BPL25.NETLIFY.APP</div>
        </div>
      </div>
    </div>
  );
};

export default WatchLive;
