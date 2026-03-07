import React from "react";

export default function DataCollectionMonitoringIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central Data Hub / Screen */}
      <rect
        x="4"
        y="8"
        width="24"
        height="16"
        rx="3"
        fill="#0C0E12"
      />

      {/* Data Collection Streams (Incoming Arrows) */}
      <path
        d="M8 4V8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 2V8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 4V8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Monitoring Graph (Line Chart) */}
      <path
        d="M8 20L12 16L16 22L20 18L24 20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Monitoring Status Indicator */}
      <circle cx="28" cy="20" r="2" fill="white" />
    </svg>
  );
}