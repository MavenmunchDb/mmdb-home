import React from "react";

interface ItemCardProps {
  item: string;
  rating: number;
  restaurant: string;
}

export default function ItemCard({ item, rating, restaurant }: ItemCardProps) {
  return (
    <div className="relative bg-[#fff] transition-all dark:bg-zinc-900/95 dark:hover:bg-zinc-900 rounded-[28px] p-7 flex flex-col items-start gap-2 border border-zinc-100 dark:border-zinc-800 w-full h-full cursor-pointer group transform-gpu hover:scale-105 duration-200">
      {/* Shadow only around the card, not on the card itself */}
      <div
        className="absolute inset-0 z-0 rounded-[28px] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200"
        style={{
          boxShadow: "0 8px 32px 0 rgba(0,0,0,0.13)",
        }}
      />
      <div
        className="item text-[20px] font-semibold mb-1 z-10 relative group-hover:text-[#bf052b] transition-colors"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        {item}
      </div>
      <div className="rating flex items-center gap-1 text-[#bf052b] text-[18px] font-semibold z-10 relative">
        <span className="number mr-1 text-zinc-900 dark:text-zinc-100">
          {rating}
        </span>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="star-icon text-[18px] mx-[2px] align-middle"
            style={{ color: "#bf052b" }}
          >
            {i < rating ? "★" : "☆"}
          </span>
        ))}
      </div>
      <div
        className="place text-[14px] text-zinc-500 dark:text-zinc-400 font-light mt-2 z-10 relative"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        {restaurant}
      </div>
    </div>
  );
}
