import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BuynSell from "./pages/buynsell";
import Job from "./pages/job"; // 대문자로 시작하는 컴포넌트 이름으로
import Board from "./pages/Board";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/buynsell" element={<BuynSell />} />
      <Route path="/board" element={<Board />} />
      <Route path="/job" element={<Job />} /> 
    </Routes>
  );
};

export default App;
