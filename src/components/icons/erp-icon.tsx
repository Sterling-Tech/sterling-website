import React from "react";

export default function ErpIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central Hub */}
      <rect
        x="11"
        y="11"
        width="10"
        height="10"
        rx="2"
        fill="#0C0E12"
      />

      {/* Top Module */}
      <rect
        x="13"
        y="2"
        width="6"
        height="6"
        rx="1.5"
        fill="#0C0E12"
      />

      {/* Bottom Module */}
      <rect
        x="13"
        y="24"
        width="6"
        height="6"
        rx="1.5"
        fill="#0C0E12"
      />

      {/* Left Module */}
      <rect
        x="2"
        y="13"
        width="6"
        height="6"
        rx="1.5"
        fill="#0C0E12"
      />

      {/* Right Module */}
      <rect
        x="24"
        y="13"
        width="6"
        height="6"
        rx="1.5"
        fill="#0C0E12"
      />

      {/* Connection Lines */}
      <line
        x1="16"
        y1="8"
        x2="16"
        y2="11"
        stroke="#0C0E12"
        strokeWidth="2"
      />
      <line
        x1="16"
        y1="21"
        x2="16"
        y2="24"
        stroke="#0C0E12"
        strokeWidth="2"
      />
      <line
        x1="8"
        y1="16"
        x2="11"
        y2="16"
        stroke="#0C0E12"
        strokeWidth="2"
      />
      <line
        x1="21"
        y1="16"
        x2="24"
        y2="16"
        stroke="#0C0E12"
        strokeWidth="2"
      />
    </svg>
  );
}