"use client";

import { useEffect, useState } from "react";
import Nav from "./components/nav";
import Cover from "./components/cover";
import Works from "./components/works";
import About from "./components/about";
import Members from "./components/members";

export default function Home() {
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white"); // 기본 글자색

  useEffect(() => {
    const worksSection = document.querySelector("#works");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBgColor("bg-gray-300"); // Works 섹션 배경색
          setTextColor("text-gray-700"); // Works 섹션 글자색
        } else {
          setBgColor("bg-transparent"); // 기본 배경색
          setTextColor("text-white"); // 기본 글자색
        }
      },
      { threshold: 0.1 } // Works 섹션이 10% 보이면 작동
    );

    if (worksSection) observer.observe(worksSection);

    return () => {
      if (worksSection) observer.unobserve(worksSection);
    };
  }, []);

  return (
    <>
      <Nav textColor={textColor} />
      <main
        className={`h-screen w-screen overflow-y-scroll snap-y snap-mandatory transition-colors duration-1000 ${bgColor} ${textColor}`}
      >
        <section
          id="cover"
          className="w-screen h-screen snap-start content-center"
        >
          <Cover />
        </section>
        <section
          id="about"
          className="w-screen h-screen snap-start lg:px-40 sm:px-8 content-center"
        >
          <About className="overflow-hidden" />
        </section>
        <section
          id="works"
          className="w-screen h-screen snap-start p-40 content-center"
        >
          <Works />
        </section>
        <section id="members" className="w-screen snap-start p-40">
          <Members />
        </section>
        <footer className="w-screen snap-start text-center text-xs p-20">© 2025 QRST Lab. All rights reserved.</footer>
      </main>
    </>
  );
}
