import React, { forwardRef } from "react";

const Main = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="main">
      <h2>자기소개</h2>
      <p>이곳은 Main 섹션입니다.</p>
    </section>
  );
});

export default Main;