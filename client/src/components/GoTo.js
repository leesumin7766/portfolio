import React from "react";
import { useNavigate } from "react-router-dom";
import "./GoTo.css";

const GoTo = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate("/Main"); // 페이지 이동
  };

  return (
    <section className="goto" id="goto">
      <button onClick={goMain}>Go to Main</button>
    </section>
  );
};

export default GoTo;