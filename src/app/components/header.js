"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Header({
  width = 40,
  height = 30,
  className,
  textColor,
}) {
  
  const [svgFillColor, setSvgFillColor] = useState("#ffffff");

  // Set initial fill color based on textColor prop
  useEffect(() => {
    if (textColor === "text-gray-700") {
      setSvgFillColor("#4B5563");
    } else if (textColor === "text-white") {
      setSvgFillColor("#ffffff");
    }
  }, [textColor]);

  // Example function to update the color (you can adjust it based on your use case)
  const changeColor = () => {
    setSvgFillColor(svgFillColor === "#4B5563" ? "#ffffff" : "#4B5563");
  };

  return (
    <button
      onClick={() => {
        const coverSection = document.getElementById("cover");
        if (coverSection) {
          coverSection.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className={`z-[700] fixed logo-container top-6 left-6 md:left-10 m:hidden block ${
        className || ""
      }`}
    >
      {/* <Image
        src="/img/cidc_logo.svg"
        alt="CIDC Logo"
        width={width}
        height={height}
        priority
        style={{ objectFit: "contain" }}
      /> */}
       <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 627 462"
        width={width}
        height={height}
        // fill={svgFillColor} // Set the color dynamically
        style={{ fill: svgFillColor }} 
      >
        <defs>
          <style>
            {`
              .cls-1 {
                stroke-width: 0px;
              }
            `}
          </style>
        </defs>
        <g id="Layer_1-2" data-name="Layer 1">
          <path className="cls-1" d="M372.21,462h-93.21V0h93.81l71.19,81.36v308.85l-71.79,71.79ZM309,432h50.79l54.21-54.21V92.64l-54.81-62.64h-50.19v402Z"/>
          <rect className="cls-1" x="189" width="30" height="462"/>
          <polygon className="cls-1" points="150 462 71.19 462 0 380.64 0 71.79 71.79 0 150 0 150 30 84.21 30 30 84.21 30 369.36 84.81 432 150 432 150 462"/>
          <polygon className="cls-1" points="627 462 548.19 462 477 380.64 477 71.79 548.79 0 627 0 627 30 561.21 30 507 84.21 507 369.36 561.81 432 627 432 627 462"/>
        </g>
      </svg>
    </button>
  );
}
