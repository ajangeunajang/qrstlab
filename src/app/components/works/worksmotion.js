"use client";
import { useEffect, useState } from "react";
import "./triangularPrism.css";

export default function WorksMotion() {
  const [worksInfo, setWorksInfo] = useState([]);

  useEffect(() => {
    const fetchWorksData = async () => {
      try {
        const res = await fetch(
          `${
            process.env.NODE_ENV === "production"
              ? "https://qrstlab.vercel.app"
              : ""
          }/api/sheets`
        );
        const data = await res.json();
        setWorksInfo(data.works); // works 시트 데이터 저장
      } catch (error) {
        console.error("Error fetching works data:", error);
      }
    };

    fetchWorksData();
  }, []);

  
  // 가장 긴 items 배열 길이(9)
  const maxItemsLength =
  worksInfo.length > 0
    ? Math.max(...worksInfo.map((work) => work.length - 1))
    : 0;

    // console.log(worksInfo[0][0]);
  
    return (
      <div className="absolute top-0 left-0 flex flex-col items-center w-full h-full font-[400] lg:font-[300]">
        {worksInfo.length < 6 ? (
          <div>Loading...</div>
        ) : (
          Array.from({ length: 17 }, (_, i) => (
            <div
              key={i}
              className={`scene overflow-hidden text-[#000] leading-none text-[4vw] lg:text-[1.25vw] lg:leading-[1.3]  ${i === 0 ? 'h-[25dvh]' : 'hover:text-[#fff] h-[5dvh]' }`}
            >
              <div className="triangle lg:hover:font-[400]" style={{ animationDelay: `${(i * 75)}ms` }}>
                {/* front 국내 */}
                <div className="flex triangle-face flex triangle-face-front bg-[#90ff4b] ">
                  <div className=" flex-[0.1] pl-12">{worksInfo[0][i]}</div>
                  <span className={`flex-1 ${i === 0 ? 'font-[600] flex items-end pb-[3dvh]' : ''}`}>{worksInfo[1][i]}</span>
                </div>
                {/* left 해외 */}
                <div className="flex triangle-face flex triangle-face-left bg-[#0f0f13] text-[#90ff4b] hover:text-[#fff] ">
                  <div className="flex-[0.1] pl-12">{worksInfo[2][i]}</div>
                  <span className={`flex-1 ${i === 0 ? 'text-[#90ff4b] font-[600] flex items-end pb-[3dvh]' : ''}`}>{worksInfo[3][i]}</span>
                </div>
                {/* right 주요 논문 */}
                <div className="flex triangle-face flex triangle-face-right bg-[#d4d4d4] text-[#fff] hover:text-[#666666] ">
                  <div className="flex-[0.1] pl-12">{worksInfo[4][i]}</div>
                  <span className={`flex-1 ${i === 0 ? 'font-[600] flex items-end pb-[3dvh]' : ''}`}>{worksInfo[5][i]}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    );
    
}