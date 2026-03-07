import React from "react";

export default function PaymentCollectionIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Card Base */}
      <rect
        x="4"
        y="8"
        width="24"
        height="16"
        rx="3"
        fill="#0C0E12"
      />

      {/* Card Stripe */}
      <rect
        x="4"
        y="11"
        width="24"
        height="3"
        fill="white"
      />

      {/* Down Arrow (Collection) */}
      <path
        d="M16 14V20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 18L16 21L19 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Small Indicator Circle */}
      <circle cx="24" cy="20" r="2" fill="white" />
    </svg>
  );
}