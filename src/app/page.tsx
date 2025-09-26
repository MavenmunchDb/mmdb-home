"use client";

import Image from "next/image";
import ItemCard from "../components/ItemCard";
import { useState } from "react";

const itemData = [
  { item: "Margherita Pizza", rating: 5, restaurant: "Luigi's Pizzeria" },
  { item: "Chicken Biryani", rating: 4, restaurant: "Hyderabad House" },
  { item: "Sushi Platter", rating: 5, restaurant: "Tokyo Dine" },
  { item: "Pasta Alfredo", rating: 4, restaurant: "Pasta Palace" },
  { item: "Cheeseburger", rating: 3, restaurant: "Burger Barn" },
  { item: "Pad Thai", rating: 5, restaurant: "Thai Spice" },
  { item: "Tacos", rating: 4, restaurant: "El Camino" },
  { item: "Falafel Wrap", rating: 4, restaurant: "Middle Feast" },
  { item: "Chocolate Cake", rating: 5, restaurant: "Sweet Tooth" },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const filtered = itemData.filter(
    (item) =>
      item.item.toLowerCase().includes(search.toLowerCase()) ||
      item.restaurant.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center px-4 sm:px-8 pb-10">
      <header className="w-full max-w-5xl pt-10 pb-6 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-2 text-center">
          Maven Munch
        </h1>
        <p className="text-lg text-zinc-500 font-normal mb-6 text-center">
          Discover & review the best dishes around you
        </p>
        <input
          type="text"
          placeholder="Search item or restaurant..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-5 py-3 rounded-2xl border border-zinc-200 bg-white text-zinc-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-base placeholder:text-zinc-400"
        />
      </header>
      <main className="w-full max-w-5xl flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length === 0 ? (
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
