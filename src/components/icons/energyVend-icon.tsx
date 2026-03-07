import React from "react";

export default function EnergyVendIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Vending Terminal Body */}
      <rect
        x="6"
        y="4"
        width="20"
        height="24"
        rx="3"
        fill="#0C0E12"
      />

      {/* Screen */}
      <rect
        x="10"
        y="8"
        width="12"
        height="6"
        rx="1.5"
        fill="white"
      />

      {/* Lightning Bolt (Energy Symbol) */}
      <path
        d="M17 10L14 16H17L15 22L20 14H17L19 10H17Z"
        fill="#0C0E12"
      />

      {/* Keypad / Payment Dots */}
      <circle cx="12" cy="19" r="1" fill="white" />
      <circle cx="16" cy="19" r="1" fill="white" />
      <circle cx="20" cy="19" r="1" fill="white" />

      {/* Slot Line */}
      <rect
        x="11"
        y="23"
        width="10"
        height="2"
        rx="1"
        fill="white"
      />
    </svg>
  );
}