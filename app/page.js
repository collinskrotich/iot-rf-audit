
import Map from "@/components/Googlemap";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center pt-8">
        <div className="flex items-center">
          <Image
            src={"/favicon.ico"}
            width={100}
            height={40}
            alt="safaricom logo"
          />
          <h1 className="text-4xl">RF-Audit Team Mtandao Hackalympics 2024</h1>
        </div>
        <div></div> {/* This is a placeholder for the right side */}
      </div>

      
      <div className="pt-8 px-20">
        <Map/>
      </div>
    </div>
  );
}
