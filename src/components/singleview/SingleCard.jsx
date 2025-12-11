"use client";
import StickyInfo from "./StickyInfo";
import DatoOversigt from "./DatoOversigt";
import BellevueStriber from "../global/animationer/BellevueStriber";
import SnapWrapper from "../global/komponenter/SnapWrapper";
import BilledKarrusel from "./BilledKarrusel";
import HorizontalScrollKarrusel from "../global/komponenter/HorizontalScrollKarrusel";
import AddOns from "./AddOns";
import Karrusel from "../global/komponenter/Karrusel";
import Medvirkende from "./Medvirkende";
import Anmeldelser from "./Anmeldelser";
import { getItemStatus } from "@/app/library/utils.js";
import SpisPaaTeatret from "./SpisPaaTeatret";

export default function SingleCard({ item }) {
  if (!item) return <p>Item ikke fundet</p>;

  const { isArchived } = getItemStatus(item);

  return (
    <div>
      <SnapWrapper image={item.image?.[0]}>
        {item.anmeldelser?.map((review) => (
          <Anmeldelser key={review.anmelder} review={review} />
        ))}
      </SnapWrapper>

      <div className="flex items-start">
        {/* Højre kolonne */}
        <div className="w-2/3 max-h--150">
          {!isArchived && <DatoOversigt item={item} />}

          <BellevueStriber>
            <div className="p-10 flex gap-10">
              {item.description_long && (
                <p className="max-w-100">{item.description_long}</p>
              )}

              {item.quote && (
                <div className="flex gap-5 items-start">
                  <span className="font-black text-7xl italic font-serif">
                    "
                  </span>
                  <blockquote>{item.quote}</blockquote>
                </div>
              )}
            </div>
          </BellevueStriber>

          {item.add_ons?.length > 0 && (
            <div className="h-screen w-screen overflow-hidden">
              {item.add_ons.length > 1 ? (
                <HorizontalScrollKarrusel>
                  {item.add_ons.map((addOn) => (
                    <AddOns key={addOn.titel} addOn={addOn} />
                  ))}
                </HorizontalScrollKarrusel>
              ) : (
                item.add_ons.map((addOn) => (
                  <AddOns key={addOn.titel} addOn={addOn} />
                ))
              )}
            </div>
          )}

          {item.spisning && <SpisPaaTeatret />}

          {item.embed ? (
            <div className="flex h-screen w-screen p-10 gap-10">
              {item.billeder && (
                <div
                  className="h-full w-screen rounded-4xl"
                  style={{ backgroundColor: item.baggrund || undefined }}
                >
                  <Karrusel>
                    {item.billeder.map((billede) => (
                      <BilledKarrusel key={billede.id} billede={billede} item={item} />
                    ))}
                  </Karrusel>
                </div>
              )}

              <div className="h-full w-full">
                <iframe
                  src={item.embed}
                  className="w-full h-full rounded-4xl"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          ) : (
            item.billeder && (
              <div className="h-screen w-screen">
                <section className="h-full w-screen pt-10">
                  <Karrusel>
                    {item.billeder.map((billede) => (
                      <BilledKarrusel key={billede.id} billede={billede} item={item} />
                    ))}
                  </Karrusel>
                </section>
              </div>
            )
          )}

          {item.medvirkende && (
            <section className="w-screen p-10">
              <Medvirkende item={item} />
            </section>
          )}
        </div>

        {/* Sticky kolonne (venstre) */}
        <aside className="h-[90vh]">
          <div className="sticky top-40">
            <StickyInfo item={item} />
          </div>
        </aside>
      </div>
    </div>
  );
}
