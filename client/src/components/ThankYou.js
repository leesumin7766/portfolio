import { motion } from "framer-motion";

export default function ThankYou() {
  const letters = "THANK YOU".split("");

  return (
    <section
      className="thank-you-section"
      style={{
        backgroundImage: "url('/assets/screen1.png'), linear-gradient(rgba(25, 0, 255, 0.05), rgba(25, 0, 255, 0.05))",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
        position: "relative",
        textAlign: "center",
        paddingTop: "100px",
      }}
    >
      {/* 부드럽게 나타나는 메시지 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1 className="message-title">찾아봐주셔서 정말 감사합니다</h1>
        <h2 className="message-subtitle">앞으로가 기대되는 개발자가 되겠습니다</h2>
      </motion.div>

      {/* THANK YOU 하나씩 순차 등장 */}
      <div className="thankyou-letters">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 + index * 0.2 }} // 2초 후부터 순차적으로
            style={{ display: "inline-block", fontSize: "4rem", fontWeight: "bold", margin: "0 5px" }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* 마지막 문구 */}
      <footer
        style={{
          position: "absolute",
          bottom: "30px",
          width: "100%",
          fontSize: "0.9rem",
          color: "black",
        }}
      >
        2025. Lee Sumin. All rights reserved. <br />
        made by React
      </footer>
    </section>
  );
}
