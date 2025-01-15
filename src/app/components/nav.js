"use client";

import Link from "next/link";
import Image from "next/image";

export default function Nav({ textColor }) {
  return (
    <div>
      <div className="logo fixed top-0 left-0 z-50">
        <div 
          onClick={() => {
            document.querySelector("#cover").scrollIntoView({ behavior: "smooth" });
          }}
          className="cursor-pointer"
        >
          {/* <Image
            src="/img/qrst_logo.svg"
            alt="QRST Logo"
            width={70}
            height={50}
            className={`mb-6 invert m-10 ${textColor}`}
          /> */}
        </div>
      </div>
      <ul className={`flex gap-4 justify-center fixed top-10 left-0 right-0 ${textColor} `}>
        <li>
          <a
            href="#about"
            className="hover:text-gray-400 mx-10 text-xl scroll-smooth"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#about")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#works"
            className="hover:text-gray-400 mx-10 text-xl scroll-smooth"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#works")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Works
          </a>
        </li>
        <li>
          <a
            href="#members"
            className="hover:text-gray-400 mx-10 text-xl scroll-smooth"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#members")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Members
          </a>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/q.shim/"
            className="hover:text-gray-400 mx-10 text-xl"
          >
            News
          </Link>
        </li>
      </ul>
    </div>
  );
}
