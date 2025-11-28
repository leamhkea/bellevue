"use client";
import { useMemo } from "react";
import { parse } from "date-fns";
import { da } from "date-fns/locale";
import KalenderCard from "./KalenderCard";

// ======================================= ALT LOGIKKEN FOR KALENDER ============================================
const KalenderSamlet = ({ items }) => {
  if (!items?.length) return <p>Ingen items fundet</p>;

  // Brug af memo: koden kører kun når items ændrer sig + undgår at beregne datoer på hver render
  const grouped = useMemo(() => {
    // Opretter et Map, der skal samle datoer
    const map = new Map();

    // Loop gennem alle items og alle deres datoer
    items.forEach((item) => {
      item.fullDates?.forEach((entry) => {
        if (!entry?.date) return;

        // parse -> laver streng om til Date-objekt
        const d = parse(entry.date, "dd/MM/yyyy", new Date(), { locale: da });
        if (isNaN(d)) return;

        // setHours -> fjerner tidszone-problemer
        d.setHours(0, 0, 0, 0);

        // getTime -> laver dato om til et unikt tal (timestamp)
        const ts = d.getTime();

        // Split tiderne i et array:
        let times = [];
        if (Array.isArray(entry.time)) {
          entry.time.forEach((t) => {
            if (typeof t === "string") {
              times.push(...t.split(",").map((s) => s.trim()));
            }
          });
        } else if (typeof entry.time === "string") {
          times = entry.time.split(",").map((s) => s.trim());
        }

        times = Array.from(new Set(times.filter(Boolean))); // fjern dubletter + tomme

        // Hvis første gang vi ser denne dato, opret arrayet
        if (!map.has(ts)) map.set(ts, []);

        // PUSH ét entry pr. tidspunkt
        times.forEach((t) => {
          map.get(ts).push({
            item,
            time: t,
          });
        });
      });
    });

    // Lav map om til en sorteret liste
    return [...map.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([timestamp, shows]) => ({
        date: new Date(timestamp),
        shows,
      }));
  }, [items]);

  // ======================================= ALT STYLING OG OPSÆTNING ============================================
  return (
    <div className="grid gap-20 px-(--content-width) w-full">
      <h1 className="text-6xl">KALENDER</h1>

      {grouped.map(({ date, shows }) => (
        <div key={date.getTime()} className="grid grid-cols-[1fr_2fr]">
          <div>
            {/* Herunder ændres formattering af datovisning */}
            <h3 className="text-xl">
              {
                date
                  .toLocaleDateString("da-DK", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                  .replace(",", "")
                  .replace(" den ", " d. ") // ændrer "den" til "d."
                  .replace(/^\w/, (c) => c.toUpperCase()) // stort begyndelsesbogstav på ugedag
              }
            </h3>
          </div>

          {/* Herunder laves listen af cards */}
          <ul className="grid gap-10">
            {shows.map(({ item, time }, i) => (
              <KalenderCard key={item.id + "-" + i} item={item} time={time} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default KalenderSamlet;
