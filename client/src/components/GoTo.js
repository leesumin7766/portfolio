import React from "react";
import { useRouter } from "next/router"; // Next.js에서는 next/router 사용

const GoTo = () => {
  const router = useRouter(); // useRouter()로 변경

  const handleShowMore = () => {
    router.push('/main'); // next.js에서 페이지 이동은 router.push 사용
  };

  return (
    <div className="goto">
      <h1>Welcome to sumin's portfolio</h1>
      <button 
        onClick={handleShowMore}
        className="show-more-button"
      >
        Show more?
      </button>
    </div>
  );
};

export default GoTo;
