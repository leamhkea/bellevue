"use client";
import KontaktMedarbejder from "./KontaktMedarbejder";

export default function KontaktFilter({ employees = [] }) {
  return (
    <div className="mt-6">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
        <KontaktMedarbejder employees={employees} />
      </ul>
    </div>
  );
}