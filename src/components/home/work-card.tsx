import React from "react";

export default function WorkCard() {
  return (
    <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
      <div>
        <img src="/quick-pay.png" alt="Quick Pay Thumbnail" />
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold md:text-4xl">Smart Power</h3>
        <p className="text-sm leading-[140%] text-slate-700 md:w-[90%] md:text-base">
          This project will discuss a logo from Sunnyday at Teamup where the
          process of making this logo is very interesting from determining the
          moodboard to the coloring design.
        </p>
        <div className="flex gap-x-4">
          <span className="rounded-3xl border border-dim-black px-2 py-2 text-sm text-dim-black md:px-3 md:text-base">
            Report Generation
          </span>
          <span className="rounded-3xl border border-dim-black px-2 py-2 text-sm text-dim-black md:px-3 md:text-base">
            Payment Collection
          </span>
        </div>
      </div>
    </div>
  );
}
