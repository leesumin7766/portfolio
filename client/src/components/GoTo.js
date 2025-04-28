import React from "react";
import { useRouter } from "next/router";
import styles from "../components/GoTo.module.css"; // CSS 모듈로 import

const GoTo = () => {
  const router = useRouter();

  const handleShowMore = () => {
    router.push('/main');
  };

  return (
    <div className={styles.goto}>  {/* styles.goto로 변경 */}
      <h1>Welcome to sumin's portfolio</h1>
      <br />
      <button 
        onClick={handleShowMore}
        className={styles["show-more-button"]}  // styles.show-more-button으로 변경 
      >
        Show more?
      </button>
    </div>
  );
};

export default GoTo;
