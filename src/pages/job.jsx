'use client';

import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { MapPinIcon, StarIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function job() {
  const [sellList, setSellList] = useState([
    {
      title: "쿠쿠 밥솥 팝니다!",
      desc: "Server for FRI,SAT, PM 5:30 - 10:30",
      company: "Tusnami",
      location: "700 Sagamore Pkwy N, Lafayette, IN 47904",
      // tag: "생활 가전",
      // parttime: true,
      // nego: true,
      // image: "",
    },
  ]);

  const addItem = () => {
    const newItem = {
      title: "새 직장!",
      desc: "테스트 설명입니다.",
      company: "Tusnami",
      location: "Purdue University",
      // tag: "기타",
      // pickup: false,
      // nego: false,
      // image: "",
    };
    setSellList([...sellList, newItem]);
  };

  const deleteItem = (index) => {
    const updated = [...sellList];
    updated.splice(index, 1);
    setSellList(updated);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />
      <main className="flex-1 w-full px-6 py-12">
        <div className="max-w-screen-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">구인 구직</h1>

          <button
            onClick={addItem}
            className="mb-6 px-4 py-2 bg-blue-500 text-white rounded"
          >
            게시물 추가
          </button>

          {/* ✅ 핵심: 고정폭 카드 정렬 */}
          <div className="flex flex-wrap gap-6 justify-start">
            {sellList.map((item, index) => (
              <div
                key={index}
                className="w-[450px] border p-4 rounded-lg shadow-md relative"
              >
                <div className="absolute top-3 right-3">
                  <StarIcon className="h-6 w-6 text-black" />
                </div>

                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-gray-300 rounded-sm" />
                  <div>
                    {/* <span className="bg-gray-100 px-2 py-0.5 text-sm rounded">{item.tag}</span> */}
                    <p className="inline-block ml-2 font-medium">{item.title}</p>

                    <div className="flex items-center gap-1 mt-2 text-gray-800 font-medium">
                      <span>Company: {item.company}</span>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-500 mt-4">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  {item.location}
                </div>

                {/* <div className="mt-4 flex gap-2">
                  {item.pickup && (
                    <button className="px-4 py-1 rounded-full bg-white border text-sm">픽업만</button>
                  )}
                  {item.nego && (
                    <button className="px-4 py-1 rounded-full bg-white border text-sm">애누리 가능</button>
                  )}
                </div> */}

                <div className="mt-4 text-right">
                  <button className="bg-black text-white px-4 py-1 text-sm rounded">Details</button>
                </div>

                <div className="mt-2 text-right">
                  <button
                    className="bg-red-500 text-white px-3 py-1 text-sm rounded"
                    onClick={() => deleteItem(index)}
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
