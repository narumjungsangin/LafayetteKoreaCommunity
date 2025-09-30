import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { MapPinIcon } from "@heroicons/react/24/outline";

const LandingPage = () => {
  // 더미 데이터
  const jobs = [
    { id: 1, title: "Tsunami Server", desc: "금/토 저녁 알바", location: "Sagamore Pkwy" },
    { id: 2, title: "Hana Mart 직원", desc: "식품 진열/계산", location: "Chauncey Hill" },
    { id: 3, title: "KBBQ 홀서빙", desc: "주 3일, 오후 타임", location: "Wabash Landing" },
    { id: 3, title: "KBBQ 홀서빙", desc: "주 3일, 오후 타임", location: "Wabash Landing" }
  ];

  const boardPosts = [
    { id: 1, text: "아 집에 언제 가나요" },
    { id: 2, text: "컬세에 관하여..." },
    { id: 3, text: "신입생 환영회 후기" },
    { id: 4, text: "아무말 대잔치 모임 후기" },
  ];

  const products = [
    { id: 1, title: "쿠쿠 밥솥", price: "$20", location: "Purdue Village" },
    { id: 2, title: "의자", price: "$10", location: "Wabash Landing" },
    { id: 3, title: "책상", price: "$25", location: "Chauncey" },
    { id: 4, title: "램프", price: "$5", location: "Campus Edge" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />
      <main className="flex-1 w-full px-4 md:px-16 py-12 space-y-16">
        {/* 상단 2:1 영역 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* 구인구직 (좌측 2칸) */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold">💼 구인구직</h2>
            <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
              {jobs.map((job) => (
                <Link
                  key={job.id}
                  to="/job"
                  className="border rounded-lg p-4 shadow hover:shadow-md transition"
                >
                  <div className="font-bold text-base">{job.title}</div>
                  <div className="text-sm text-gray-600">{job.desc}</div>
                  <div className="text-xs text-gray-500 flex items-center mt-1">
                    <MapPinIcon className="h-4 w-4 mr-1" /> {job.location}
                  </div>
                </Link>
              ))}
              <div className="text-right">
                <Link to="/job" className="text-blue-500 text-sm font-medium">더 보기 →</Link>
              </div>
            </div>
          </div>

          {/* 커뮤니티 (우측 1칸) */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">🗣 커뮤니티</h2>
            <div className="border rounded-lg p-4 space-y-2 min-h-[200px]">
              {boardPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-gray-100 p-2 rounded hover:bg-gray-200 text-sm truncate"
                >
                  <Link to="/board">{post.text}</Link>
                </div>
              ))}
              <div className="text-right">
                <Link to="/board" className="text-blue-500 text-sm">
                  더 보기 →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 사고팔고 */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">📦 사고팔고</h2>
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            {products.map((item) => (
              <Link
                key={item.id}
                to="/buynsell"
                className="border rounded-lg p-4 shadow hover:shadow-md transition"
              >
                <div className="font-bold text-base">{item.title}</div>
                <div className="text-sm text-gray-600">가격: {item.price}</div>
                <div className="text-xs text-gray-500 flex items-center mt-1">
                  <MapPinIcon className="h-4 w-4 mr-1" /> {item.location}
                </div>
              </Link>
            ))}
            <div className="text-right">
              <Link to="/job" className="text-blue-500 text-sm font-medium">더 보기 →</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
