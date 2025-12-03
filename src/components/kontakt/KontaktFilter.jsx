"use client";
import KontaktMedarbejder from "./KontaktMedarbejder";
// import KontaktHero from "@/components/kontakt/KontaktHero";
// import Nyhedsbrev from "@/components/kontakt/Nyhedsbrev"

export default function KontaktFilter({ employees = [] }) {
  return (
    <div>
        {/* <KontaktHero /> */}
        <div className="mt-6 bg-(--beige-100)">
        <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 pr-15">
            <KontaktMedarbejder employees={employees} />
        </ul>
        </div>
        {/* <Nyhedsbrev /> */}
    </div>
  );
}