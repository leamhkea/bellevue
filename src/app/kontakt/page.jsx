import KontaktServer from "@/components/kontakt/KontaktServer";
// import KontaktMedarbejder from "./KontaktMedarbejder";
import KontaktHero from "@/components/kontakt/KontaktHero";
import Nyhedsbrev from "@/components/kontakt/Nyhedsbrev";
import LedigeStillinger from "@/components/kontakt/LedigeStillinger";
import Image from "next/image";

export default function Kontakt() {
  return (
    <div
      className="
    py-40
    bg-none               /* Mobile: ingen baggrund */
    lg:bg-[url('/svg/snoerkel-top-right.svg')]   /* Tablet+ */
    lg:bg-no-repeat
    lg:bg-position-[right_-20px_top_-200px]
  "
    >
      <KontaktHero />
      <KontaktServer />
      <LedigeStillinger />
      <div className="relative">
      <Nyhedsbrev />
    
       <div className="absolute right-0 -bottom-40 -z-10 hidden lg:block rotate-180">
              <Image
                src="/svg/snoerkel-top-right.svg"
                alt=""
                width={600}
                height={350}
                />
            </div>
                </div>
    </div>
  );
}
