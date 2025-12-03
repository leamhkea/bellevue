"use client";
import { useMemo, useState, useRef, useEffect } from "react";
import { parseDates } from "@/app/utils.js"
import ListCard from "./ListCard";
import ListCardDropDown from "./ListCardDropDown";
import WipeLineAnimation from "@/components/global/animationer/WipeLineAnimarion";

export default function ListFilter({ items }) {
  const [activeTab, setActiveTab] = useState("current");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const currentRef = useRef(null);
  const archiveRef = useRef(null);
  const [tabWidths, setTabWidths] = useState({ current: 0, archive: 0 });

  useEffect(() => {
    setTabWidths({
      current: currentRef.current?.offsetWidth || 0,
      archive: archiveRef.current?.offsetWidth || 0,
    });
  }, [activeTab]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Beregner gyldige dato fra funktion i utils
    const itemsWithLatestDate = useMemo(
      () => parseDates(items, { addLatestDate: true }),
      [items]
    );

  const dynamicCategories = useMemo(() => {
    const allTags = items.flatMap((item) => item.tags || []);
    return [...new Set(allTags)];
  }, [items]);

  const upcoming = itemsWithLatestDate.filter(
    (item) => item.latestDate.getTime() >= today.getTime()
  );
  const archive = itemsWithLatestDate.filter(
    (item) => item.latestDate.getTime() < today.getTime()
  );

  let visibleItems = activeTab === "current" ? upcoming : archive;

  if (selectedCategory) {
    visibleItems = visibleItems.filter((item) =>
      item.tags?.includes(selectedCategory)
    );
  }

  const handleFilterChange = (type, value) => {
    if (type === "category") setSelectedCategory(value);
  };

  const removeCategoryFilter = () => setSelectedCategory(null);

  return (
    <div className="pt-40">
      {/* TABS */}
      <div className="flex gap-6 mb-6 pb-3 relative w-full">
        <button onClick={() => setActiveTab("current")}>
          <h1
            ref={currentRef}
            className={`${
              activeTab === "current" ? "text-(--moerkeblaa-900)" : "bellevueblaa-100"
            }`}
          >
            FORESTILLINGER
          </h1>
        </button>

        <button onClick={() => setActiveTab("archive")}>
          <h1
            ref={archiveRef}
            className={`${
              activeTab === "archive" ? "text-(--moerkeblaa-900)" : "bellevueblaa-100"
            }`}
          >
            ARKIV
          </h1>
        </button>

        <WipeLineAnimation activeTab={activeTab} tabWidths={tabWidths} />
      </div>

      <ListCardDropDown onFilterChange={handleFilterChange} categories={dynamicCategories} />

      {selectedCategory && (
        <div className="flex gap-2 mt-4 ml-4">
          <span className="flex items-center gap-2 border-2 border-blue-400 text-blue-400 px-3 py-1 rounded-2xl text-sm">
            {selectedCategory}
            <button
              onClick={removeCategoryFilter}
              className="font-bold text-blue-400 hover:text-blue-800"
            >
              ×
            </button>
          </span>
        </div>
      )}

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
              {visibleItems.map((item) => (
        <ListCard key={item.id} item={item} />
              ))}
      </ul>
    </div>
  );
}
