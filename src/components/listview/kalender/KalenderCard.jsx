"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const KalenderCard = ({ item, time }) => {
  const [openId, setOpenId] = useState(null);
  const [closingId, setClosingId] = useState(null);

  const toggle = (id) => {
    if (openId === id) {
      setClosingId(id);
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  if (!item) return null;

  // Formatér time (kan være string eller array)
  const displayTime = Array.isArray(time) ? time.join(", ") : time || ""; // fallback hvis tomt

  const isOpen = openId === item.id;
  const isClosing = closingId === item.id;
  const noBottomRadius = isOpen || isClosing;

  return (
    <li>
      <div className="transition-colors duration-300">
        {/* ============================= CARD ============================= */}
        <div
          className={`
            flex justify-between p-10 transition-colors duration-300
            ${isOpen ? "bg-(--beige-300)" : "bg-(--beige-100)"}
            ${noBottomRadius ? "rounded-t-2xl" : "rounded-2xl"}
          `}
        >
          {/* INFORMATION */}
          <div className="grid gap-5">
            <div className="w-50">
              <div className="grid grid-cols-3">
                {/* Udskiftet item.date → TIME */}
                <p>{displayTime}</p>

                <div className="flex gap-5">
                  <p>|</p>
                  <p>{item.tags}</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl">{item.name}</h2>
          </div>

          {/* KNAPPEN */}
          <button
            className="self-end px-9 py-3 rounded-4xl border border-(--bellevueblaa-600) text-(--bellevueblaa-600)"
            onClick={() => toggle(item.id)}
          >
            {isOpen ? "Luk" : "Læs mere"}
          </button>
        </div>

        {/* =========================== ACCORDION ============================ */}
        <div
          className={`
            overflow-hidden transition-all duration-300 ease-in-out 
            px-10 bg-(--beige-300) rounded-b-2xl
            ${isOpen ? "max-h-[400px] pt-5 pb-10" : "max-h-0 py-0"}
          `}
          onTransitionEnd={() => {
            if (isClosing) setClosingId(null);
          }}
        >
          {/* INDHOLDET */}
          <div className="grid grid-cols-2 gap-10">
            {item.image?.[0] && (
              <div className="flex shrink-0 w-full">
                <Image
                  src={item.image[0].url}
                  alt={item.image[0].alt}
                  width={200}
                  height={200}
                  className="object-cover rounded-xl h-full w-full"
                />
              </div>
            )}

            <div className="flex flex-col justify-between">
              <p>{item.description_short}</p>

              <Link
                href={`/forestillinger/${item.id}`}
                className="self-end px-9 py-3 rounded-4xl bg-(--bellevueblaa-600) text-(--beige-100)"
              >
                Læs mere
              </Link>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default KalenderCard;
