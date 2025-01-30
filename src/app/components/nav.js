"use client";

// import Image from "next/image";
import { useState } from "react";
import Header from "./header";

export default function Nav({ textColor }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // 메뉴 토글 열기닫기
  };
  const closeMenu = () => {
    setIsOpen(false); // 메뉴 닫기
  };

  return (
    <div className="z-[500]">
      {/* <div className="logo fixed top-0 left-0 z-50">
        <div 
          onClick={() => {
            document.querySelector("#cover").scrollIntoView({ behavior: "smooth" });
          }}
          className="cursor-pointer"
        >
          <Image
            src="/img/qrst_logo.svg"
            alt="QRST Logo"
            width={70}
            height={50}
            className={`mb-6 invert m-10 ${textColor}`}
          />
        </div>
      </div> */}

      <button
        className={`hidden sm:flex fixed z-[600] top-6 right-10 w-5 h-5 flex-col justify-between transition-all duration-300 transform ${isOpen ? "h-[1rem] right-9" : ""}`}
        onClick={toggleMenu}
      >
        <div
          className={`w-5 border-t-2 transition-all duration-300 transform origin-top-left ${
            isOpen ? "rotate-45" : ""
          } ${textColor === 'text-gray-700' ? 'border-gray-700' : 'border-white'}`}
        ></div>
        <div
          className={`w-5 border-t-2 transition-all duration-300 transform ${
            isOpen ? "opacity-0" : ""
          } ${textColor === 'text-gray-700' ? 'border-gray-700' : 'border-white'}`}
        ></div>
        <div
          className={`w-5 border-t-2 transition-all duration-300 transform origin-bottom-left ${
            isOpen ? "-rotate-45" : ""
          } ${textColor === 'text-gray-700' ? 'border-gray-700' : 'border-white'}`}
        ></div>
      </button>

      <ul
        className={`z-[500] text-xl xl:text-2xl hidden font-normal sm:flex justify-center gap-4 fixed top-0 pt-4 mx-auto w-screen transition-all duration-300 transform ${textColor} ${
          isOpen
            ? "opacity-100 bg-[rgba(15,15,19,0.5)] backdrop-blur w-full h-full"
            : "top-[-4rem] opacity-0"
        }`}
      >
        <li className="mx-3">
          <a
            href="#about"
            className="transition-all duration-300 hover:filter lg:hover:blur-md scroll-smooth"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#about")
                .scrollIntoView({ behavior: "smooth" });
                closeMenu(); // 메뉴 닫기
            }}
          >
            About
          </a>
        </li>
        <li className="mx-3">
          <a
            href="#works"
            className="transition-all duration-300 hover:filter lg:hover:blur-md scroll-smooth"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#works")
                .scrollIntoView({ behavior: "smooth" });
                closeMenu(); // 메뉴 닫기
            }}
          >
            Works
          </a>
        </li>
        <li className="mx-3">
          <a
            href="#members"
            className="transition-all duration-300 hover:filter lg:hover:blur-md scroll-smooth"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#members")
                .scrollIntoView({ behavior: "smooth" });
                closeMenu(); // 메뉴 닫기
            }}
          >
            People
          </a>
        </li>
        <li className="mx-3">
          <a
            href="#contact"
            className="transition-all duration-300 hover:filter lg:hover:blur-md scroll-smooth"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                .scrollIntoView({ behavior: "smooth" });
                closeMenu(); // 메뉴 닫기
            }}
          >
            Contact
          </a>
        </li>
        {/* <li>
          <Link
            href="https://www.instagram.com/q.shim/"
            className="transition-all duration-300 hover:filter lg:hover:blur-md"
          >
            News
          </Link>
        </li> */}
      </ul>

      <Header />
    </div>
  );
}
