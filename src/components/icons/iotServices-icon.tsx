import React from "react";

export default function IoTServicesIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central Hub / Controller Base */}
      <rect
        x="6"
        y="10"
        width="20"
        height="12"
        rx="2"
        fill="#0C0E12"
      />

      {/* Connectivity Waves (Wireless Signal) */}
      <path
        d="M11 7C13 -1 19 -1 21 7"
        stroke="#0C0E12"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 14C14.5 12.5 17.5 12.5 19 14"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Network Nodes (The "Things") */}
      <circle cx="16" cy="18" r="1.5" fill="white" /> {/* Center Node */}
      
      {/* Connection Lines to Outer Nodes */}
      <path
        d="M16 18L12 16M16 18L20 16M16 18L16 22"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* External Device Indicators */}
      <circle cx="4" cy="16" r="2" fill="#0C0E12" />
      <circle cx="28" cy="16" r="2" fill="#0C0E12" />
    </svg>
  );
}