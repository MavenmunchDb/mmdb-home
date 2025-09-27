"use client";

import ItemCard from "../components/ItemCard";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import type { ItemCardProps } from "../components/ItemCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [itemData, setItemData] = useState<ItemCardProps[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  console.log("Component mounted");
  async function fetchItems() {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("items_table")
        .select("*");
      console.log("Supabase data:", data);
      console.log("Supabase error:", error);
      if (!error && data) setItemData(data);
    } catch (e) {
      console.error("Unexpected error:", e);
    }
    setLoading(false);
  }
  fetchItems();
}, []);

const filtered = itemData
  .filter((item) => {
    const searchWords = search.trim().toLowerCase().split(/\s+/);
    const itemText = item.item.toLowerCase();

    let lastIndex = -1;
    return (
      searchWords.every((word) => {
        lastIndex = itemText.indexOf(word, lastIndex + 1);
        return lastIndex !== -1;
      }) || item.place.toLowerCase().includes(search.toLowerCase())
    );
  })
  .sort((a, b) => b.item_rating - a.item_rating);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center px-4 sm:px-8 pb-10">
      <header className="w-full max-w-5xl pt-10 pb-6 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-2 text-center">
          Maven Munch
        </h1>
        <p className="text-lg text-zinc-500 font-normal mb-6 text-center">
          Discover the best dishes around you
        </p>
        <input
          type="text"
          placeholder="Search item or place"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-5 py-3 rounded-2xl border border-zinc-200 bg-white text-zinc-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-base placeholder:text-zinc-400"
        />
      </header>
      <main className="w-full max-w-5xl flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full text-center text-zinc-400 text-lg py-20">
              Loading...
            </div>
          ) : filtered.length === 0 ? (
            <div className="col-span-full text-center text-zinc-400 text-lg py-20">
              No results found.
            </div>
          ) : (
            filtered.map((item, idx) => <ItemCard key={idx} {...item} />)
          )}
        </div>
      </main>
    </div>
  );
}
