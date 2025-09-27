import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

export interface ItemCardProps {
  item: string;
  item_rating: number;
  place: string;
}

export default function ItemCard({ item, item_rating, place }: ItemCardProps) {
  return (
    <div className="relative bg-[#fff] transition-all dark:bg-zinc-900/95 dark:hover:bg-zinc-900 rounded-[24px] p-7 flex flex-col items-start gap-2 dark:border-zinc-800 w-full h-full cursor-pointer group transform-gpu hover:scale-105 duration-200"
          style={{
            boxShadow: "0 4px 24px 0 rgba(60,60,60,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.06)",
          }}
    >
      {/* Shadow */}
      <div
        className="absolute inset-0 z-0 rounded-[24px] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200"
        style={{
          boxShadow: "0 8px 32px 0 rgba(0,0,0,0.13)",
        }}
      />
      <div
        className="item text-[20px] font-semibold z-10 relative group-hover:text-[#bf052b] transition-colors"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        {item}
      </div>
      <div
        className="place text-[14px] text-zinc-500 dark:text-zinc-400 font-light z-10 relative"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        {place}
      </div>
      <div className="rating flex items-center gap-1 text-[#bf052b] text-[18px] font-semibold z-10 relative mt-auto">
        <span className="number mr-0.5 text-zinc-900 dark:text-zinc-100"
        style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "18px",
          }}
        >
          {item_rating}
        </span>
        <span
          className="star-icon"
          style={{
            fontSize: "18px",
            color: "#bf052b",
            verticalAlign: "middle",
            marginLeft: "3px",
            marginRight: "6px",
          }}
        >
          <i className="fas fa-star"></i>
        </span>
      </div>
    </div>
  );
}
