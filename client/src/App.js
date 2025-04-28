import './App.css';
import './index.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoTo from "./components/GoTo";
import Main from "./components/Main";
// import ThankYou from './components/ThankYou';

function App() {
  return (
    <Router>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={
          <>
            <GoTo />
          </>
        } />
        
        {/* /Main으로 이동 시 Main 컴포넌트 렌더링 */}
        <Route path="/Main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;