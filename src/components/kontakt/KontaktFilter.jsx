"use client";
import KontaktMedarbejder from "./KontaktMedarbejder";
// import KontaktHero from "@/components/kontakt/KontaktHero";
// import Nyhedsbrev from "@/components/kontakt/Nyhedsbrev"

export default function KontaktFilter({ employees = [] }) {
  return (
    <div>
      {/* <KontaktHero /> */}
      <section className=" bg-(--beige-100)">
        <h2 className="text-center pt-20">Teatrets Medarbejdere</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 pr-20 pb-20">
          <KontaktMedarbejder employees={employees} />
        </ul>
      </section>
      {/* <Nyhedsbrev /> */}
    </div>
  );
}
