import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="mt-20 w-full">
      <Link href="/">
        <a className="flex flex-col items-center">
          <svg
            width="38"
            height="38"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="23" stroke="white" strokeWidth="2" />
            <line
              x1="16.5"
              y1="2.5"
              x2="16.5"
              y2="45.5"
              stroke="white"
              strokeLinecap="round"
            />
            <line
              x1="16.6733"
              y1="26.7729"
              x2="24.3729"
              y2="2.3267"
              stroke="white"
              strokeLinecap="round"
            />
            <line
              x1="25.4799"
              y1="1.85955"
              x2="37.4799"
              y2="42.8596"
              stroke="white"
            />
            <line
              x1="16.7007"
              y1="26.9053"
              x2="36.9053"
              y2="42.2993"
              stroke="white"
              strokeLinecap="round"
            />
            <line
              x1="32.62"
              y1="26.5"
              x2="24.5"
              y2="26.5"
              stroke="white"
              strokeLinecap="round"
            />
          </svg>
          <h2 className="text-sm md:text-xl font-medium">Angela Goncalves</h2>
        </a>
      </Link>
      <div className="flex flex-row mt-4 mb-6 md:my-8 space-x-4 md:space-x-10">
        <a href="https://www.linkedin.com/in/angela-goncalves-6009a518a/">
          <img src="../svg/Linkedin.svg" alt="my linkedin profile" />
        </a>
        <a href="https://github.com/angela-goncalves">
          <img src="../svg/Github.svg" alt="my github profile" />
        </a>
      </div>
      <div className="w-full flex flex-row justify-between text-sm md:text-base">
        <p>Built with React, Next, Tailwind, Typescript.</p>
        <p className="text-center">Designed in figma and love. 2021</p>
      </div>
    </div>
  );
}
