'use client';

import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function BuynSell() {
  const [sellList, setSellList] = useState([
    {
      title: "쿠쿠 밥솥 팝니다!",
      desc: "귀국으로 인하여 급매 합니다!",
      price: 1200,
      location: "700 Sagamore Pkwy N, Lafayette, IN 47904",
      tag: "생활 가전",
      pickup: true,
      nego: true,
      image: "",
    },
    {
      title: "의자 팝니다",
      desc: "튼튼하고 상태 좋습니다",
      price: 30,
      location: "Purdue Village",
      tag: "가구",
      pickup: false,
      nego: false,
      image: "",
    },
  ]);

  const addItem = () => {
    const newItem = {
      title: "새 상품!",
      desc: "테스트 설명입니다.",
      price: 999,
      location: "Purdue University",
      tag: "기타",
      pickup: false,
      nego: false,
      image: "",
    };
    setSellList([...sellList, newItem]);
  };

  const deleteItem = (index) => {
    const updated = [...sellList];
    updated.splice(index, 1);
    setSellList(updated);
  };

  return (
    <div className="flex flex-col">
      <Header />
      <div className="p-6">
        <button onClick={addItem} className="mb-4 bg-green-500 text-white px-4 py-2">상품 추가</button>
        {sellList.map((item, index) => (
          <div key={index} className="border p-4 mb-2">
            <h3 className="font-bold">{item.title}</h3>
            <p>{item.desc}</p>
            <p>가격: ${item.price}</p>
            <p>위치: {item.location}</p>
            <button onClick={() => deleteItem(index)} className="text-red-600">삭제</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
