import Image from "next/image";
import { poster } from "@/public/assets";
import Link from "next/link";

export default function Home() {
  return (
    <main className="backdrop-blur-sm mx-[2rem] min-[450px]:mx-[8rem] sm:mx-[2rem] xl:mx-[20rem]">
      <div className="flex flex-col sm:flex-row rounded-lg mt-8 ">
        <div className="sm:flex-1 ">
          <Image
            src={poster}
            className="h-full object-cover"
            alt="Cricket Poster"
          />
        </div>
        <div className="p-4 sm:flex-1 text-white">
          <h2 className="text-xl font-semibold">Watch Live BPL 2025</h2>
          <p className="mt-1">Without Any Cost</p>
          <Link href="/watchlive" className="btn mt-4 btn-primary w-full">
            Watch Now
          </Link>
        </div>
      </div>

      {/* Area for external HTML script */}
      <div className="mt-8 p-4 bg-gray-800 rounded-lg">
        <div id="external-content">
          {/* Replace this with your external HTML script */}
             <!-- Histats.com  (div with counter) --><div id="histats_counter"></div>
<!-- Histats.com  START  (aync)-->
<script type="text/javascript">var _Hasync= _Hasync|| [];
_Hasync.push(['Histats.start', '1,4915091,4,605,110,55,00011101']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function() {
var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
hs.src = ('//s10.histats.com/js15_as.js');
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();</script>
<noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?4915091&101" alt="hidden hit counter" border="0"></a></noscript>
<!-- Histats.com  END  -->
        </div>
      </div>
    </main>
  );
}
