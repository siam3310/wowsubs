import React, { useState } from "react";

const WatchLive = () => {
const iframeStyles = {
width: "100%", // Set the width to 100% of the parent container
height: "56.25%", // Set the height to maintain a 16:9 aspect ratio
};
const [activeTab, setActiveTab] = useState(1);

const handleTabClick = (tabNumber) => {
setActiveTab(tabNumber);
};

return (
<div className="w-full text-black">
<div className="tabs tabs-boxed xx-4 sm:mx-[2rem] xl:mx-[8rem] mt-15">
<a
className={`tab ${activeTab === 1 ? "tab-active" : ""}`}
onClick={() => handleTabClick(1)}
>
Willow Cricket
</a>
<a
className={`tab ${activeTab === 2 ? "tab-active" : ""}`}
onClick={() => handleTabClick(2)}
>
Star Sports English
</a>
<a
className={`tab ${activeTab === 3 ? "tab-active" : ""}`}
onClick={() => handleTabClick(3)}
>
A Sports HD
</a>

</div>
<div className="flex justify-center min-[550px]:mt-[1rem]">
<div className="bg-white text-center capitalize min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]">

</div>
</div>
{activeTab === 1 && (
<div className="flex justify-center">
<iframe
src="https://cinebuzz.netfy.live/crichd/play.php?cricid=willowusa"
width="100%"
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
width="100%"
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
width="100%"
height="540"
frameBorder="0"
allowFullScreen={true}
className="aspect-video object-fill w-[100%] h-[56.25%] min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]"
></iframe>
</div>
)}


<div className="flex justify-center">
<div className="bg-white text-center capitalize min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]">

</div>
</div>
<div className="flex justify-center">
<div className="bg-white text-center w-full capitalize min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]">
<div className="text-xl ">
BPL25.NETLIFY.APP
</div>
</div>
</div>
</div>
);
};

export default WatchLive;
