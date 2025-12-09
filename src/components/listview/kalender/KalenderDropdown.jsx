"use client";

import DropDown from "@/components/global/komponenter/DropDown";

export default function KalenderDropdown({
  dates = [],
  categories = [],
  children = [],
  onFilterChange,
}) {
  return (
    <div className="flex gap-4">
      <DropDown
        label="Dato"
        items={["Alle", ...dates]}
        onSelect={(value) => onFilterChange("date", value)}
      />

      <DropDown
        label="Kategori"
        items={["Alle", ...categories]}
        onSelect={(value) => onFilterChange("category", value)}
      />

      <DropDown
        label="Børn"
        items={["Alle", ...children]}
        onSelect={(value) => onFilterChange("children", value)}
      />
    </div>
  );
}
