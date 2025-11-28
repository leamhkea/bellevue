"use client";
import Image from "next/image";
import StickyInfo from "./StickyInfo";
import DatoOversigt from "./DatoOversigt";
import Anmeldelser from "./Anmeldelser";
import Karrusel from "../global/komponenter/Karrusel";
import Cirkel from "../global/ikoner/Cirkel";

export default function SingleCard({ item }) {
  if (!item) return <p>Item ikke fundet</p>;

  return (
    <div className="flex items-start">
      {/* højre kolonne */}
      <section className="w-2/3">
        <article className="w-full h-full mx-auto pl-6">
          {item.image?.[0]?.url && (
            <Image
              src={item.image[0].url}
              alt={item.image[0].alt || item.name}
              width={1000}
              height={1000}
              className="object-cover rounded-lg mb-6"
            />
          )}
        </article>
        <DatoOversigt item={item}/>
        <div className="p-10 max-w-150">
          <p>{item.description_long}</p>
        </div>

        {item.anmeldelser ?(
               <div className="h-screen w-screen bg-(--bellevueblaa-900) text-(--hvid) p-10 flex flex-col items-center justify-center relative overflow-hidden">
                <div>
                    <Cirkel/>
                </div>
            <Karrusel>
            {item.anmeldelser.map((review) => (
                <Anmeldelser review={review} />
            ))}
            </Karrusel>

            </div>
        ):null
        }
      </section>

      {/* sticky kolonne (venstre) */}
      <aside className="h-[200vh]">
        <div className="sticky top-40">
          <StickyInfo item={item} />
        </div>
      </aside>
    </div>
  );
}
