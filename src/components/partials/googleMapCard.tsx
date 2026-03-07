"use client";

import React from "react";
import { MapPin } from "lucide-react";

interface GoogleMapCardProps {
  height?: string;
}

export default function GoogleMapCard({ height = "450px" }: GoogleMapCardProps) {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">

        {/* Card Header */}
        <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-4">
          <MapPin className="text-primary" />
          <h3 className="text-lg font-semibold text-slate-900">
            Visit Us At Our Location
          </h3>
        </div>

        {/* Map */}
        <div style={{ height }}>
          <iframe
            src="https://maps.google.com/maps?q=10%20Chris%20Akinro%20Street%20Agungi%20Lekki&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </div>
  );
}