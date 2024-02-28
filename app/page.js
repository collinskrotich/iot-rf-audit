
import Map from "@/components/Googlemap";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <div className="flex">
          <Image
            src={"/favicon.ico"}
            width={60}
            height={40}
            alt="safaricom logo"
          />
          <h1 className="text-4xl">RF-Audit Team Mtandao- Hackalympics 2024</h1>
        </div>

      
      <div className="pt-8 px-20">
        <Map/>
      </div>
    </div>
  );
}
