import Image from "next/image";
import { poster } from "@/public/assets";
import Link from "next/link";

export default function Home() {
  return (
    <main className="backdrop-blur-sm mx-[2rem] min-[450px]:mx-[8rem] sm:mx-[2rem] xl:mx-[20rem]" style={{ borderRadius: '15px' }} >
      <div className="flex flex-col sm:flex-row rounded-lg mt-8 ">
        <div className="sm:flex-1 ">
          <Image
            src={poster}
            className="h-full object-cover"
            alt="Cricket Poster"
            borderRadius="5%"  
          />
        </div>
        <div className=" p-4 sm:flex-1 text-white">
          <h2 className="text-xl font-semibold">Watch Live BPL 2025 </h2>
          <p className="  mt-1 ">Without Any Cost</p>
          <Link href="/watchlive" className="btn mt-4  btn-primary  w-full ">
            Watch Now
          </Link>
        </div>
      </div>
    </main>
  );
}
