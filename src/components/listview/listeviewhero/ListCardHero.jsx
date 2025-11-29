"use client";
import { useState, useEffect } from "react";
import ListCard from "@/components/listview/forestillinger/ListCard";
import { createClient } from "@supabase/supabase-js";
import ListCardDropDown from "./ListCardDropDown";

const supabase = createClient(
  "https://rzwaokiepaobrlrpphia.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ListCardHero() {
  const [activeFilter, setActiveFilter] = useState("forestillinger");
  const [items, setItems] = useState([]);

  // Fetch data fra Supabase
  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("bellevue_items").select("*");
      if (error) {
        console.error(error);
        return;
      }
      setItems(data || []);
    }
    fetchData();
  }, []);

  return (
      <div>
      {/* FILTER KNAPPER */}
      <div className="pl-10 flex gap-0 mb-5 text-7xl">
        <h1
          onClick={() => setActiveFilter("forestillinger")}
          className={`cursor-pointer pr-5 border-b-4 ${
            activeFilter === "forestillinger"
              ? "!text-blue-900 border-b-4 " : "!text-blue-100 border-b-4"
          }`}
        >
          FORESTILLINGER
        </h1>

        <h1
          onClick={() => setActiveFilter("arkiv")}
          className={`cursor-pointer pl-5 border-b-4 ${
            activeFilter === "arkiv"
              ? "!text-blue-900 border-b-4 " : "!text-blue-100 border-b-4"
          }`}
        >
          ARKIV
        </h1>
        
      </div>
      <ListCardDropDown />

      {/* CONTENT */}
      {activeFilter === "forestillinger" ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-30 mt-4">
          <ListCard items={items} />
        </ul>
      ) : (
        <h1>HER SKAL TIDELIGERE FORESTILLINGER VISES</h1>
      )}

    </div>
  );
}
