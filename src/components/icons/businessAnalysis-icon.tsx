import React from "react";

export default function BusinessAnalysisIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main Base Card */}
      <rect
        x="4"
        y="8"
        width="24"
        height="16"
        rx="3"
        fill="#0C0E12"
      />

      {/* Analysis: Bar Chart Elements */}
      <rect x="8" y="18" width="2" height="3" rx="0.5" fill="white" />
      <rect x="11" y="15" width="2" height="6" rx="0.5" fill="white" />
      <rect x="14" y="12" width="2" height="9" rx="0.5" fill="white" />

      {/* AI: Sparkle / Intelligence Indicator */}
      <path
        d="M23 12L23.5 14.5L26 15L23.5 15.5L23 18L22.5 15.5L20 15L22.5 14.5L23 12Z"
        fill="white"
      />
      
      {/* Connectivity: The "Neural" link */}
      <path
        d="M16 14C18 14 19 13 20 12"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />

      {/* Small Status Node */}
      <circle cx="24" cy="20" r="1.5" fill="white" />
    </svg>
  );
}