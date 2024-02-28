
import DataTable from "@/components/DataTable";
import Googlemap from "@/components/Googlemap";
import Image from "next/image";
import Link from "next/link";

export default function Home () {
  return (
    <>
    <div>
        <Link href={"/"}>
        <Image
        src={"/saf-logo.png"}
        width={120}
        height={40}
        alt="safaricom logo"
      />
        </Link>

    </div>
    <div className="flex">

    <Googlemap/>
    <br/>
    <br/>
   

    <div className="pt-20">     
        <DataTable/> 
    </div>
    </div>
</>
 
  );
}

