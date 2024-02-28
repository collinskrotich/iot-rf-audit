


import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <Image
          src={"/saf-logo.png"}
          width={160}
          height={60}
          alt="safaricom logo"
        />
      </div>
      <h1 className="text-4xl text-center">RF-Audit Team Mtandao- Hackalympics 2024</h1>
      <Link href={"/dashboard"}>
          <Button color="primary" size="lg">
            Go to Dashboard
          </Button>
        
      </Link>
    </div>
  );
}
