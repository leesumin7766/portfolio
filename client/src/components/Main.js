import React from "react";
// import "./Main.css"; // CSS 파일 따로 작성해야 함
import { Link } from "react-scroll"; // 페이지 내부 이동용
import { motion } from "framer-motion";

const Main = () => {
  const letters = "THANK YOU".split("");
  return (
    <div className="main">
      {/* Header */}
      <header className="header">
        <div className="nav-left">
          <a href="https://your-link.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/notion-icon.png" alt="Notion" className="notion-icon" />
          </a>
        </div>
        <div className="nav-right">
          <nav className="nav-menu">
            <Link to="skills" smooth={true} duration={500}>Skills</Link>
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
            <Link to="education" smooth={true} duration={500}>Education</Link>
            <Link to="certificate" smooth={true} duration={500}>Certificate</Link>
          </nav>
        </div>
      </header>

      {/* Main Background */}
      <section className="intro" style={{ backgroundImage: "url('/assets/screen1.png')" }}>
        <div className="intro-text">
          <h1>Introduction</h1>
          <h2>안녕하세요<br></br><strong>백엔드 개발자 이수민</strong>입니다.</h2>
          <p>미래의 산업이 필요로 하는 엔지니어가 되려고 노력합니다.</p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-me" id="aboutme">
        <div className="about-left">
          <h1>ABOUT ME</h1>
          <ul>
            <li>👤 Lee sumin
            ✉️ hojun7766@naver.com</li>
            <li>🎂 98.05.10
            🏫 인천대학교 정보통신공학과</li>
          </ul>
          <div className="scroll-down">
            <i class="bi bi-arrow-down-circle-fill"></i>
            <button>Scroll</button>
          </div>
        </div>
        <div className="about-right">
          <img src="/assets/screen2.png" alt="Profile" className="profile-image" />
        </div>
      </section>
      <section className="Skills" id="skills">
        <h1>SKILLS</h1>
        <div className="skills-card">
          <ul>
            <li>💻 Language</li>
            <li>💻 Front-end</li>
            <ul>
              <li>Back-end</li>
              <li>Language</li>
            </ul>
          </ul>
        </div>
      </section>
      <section className="projects" id="projects">
        <h1>Projects</h1>

        <div className="project-card">
          <h2>Bible <span>(25.02.03~25.02.14)</span></h2>
            <p>온라인 도서 대여 서비스</p>
            <a href="https://github.com/your-bible-link" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github github-icon"></i>
            </a>
      </div>

      <div className="project-card">
        <h2>milgam <span>(24.06.17~24.07.26)</span></h2>
          <p>머를 활용한 인파밀집 및 이상행동 검출 서비스</p>
          <a href="https://github.com/your-milgam-link" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github github-icon"></i>
          </a>
        </div>
      </section>
      <section className="education" id="education">
        <h1>Education</h1>

        <div className="education-item">
          <img src="/assets/screen5.png" alt="KOSA Logo" />
          <p><span>kosa java</span> 개발자 양성 과정</p>
        </div>

        <div className="education-item">
          <img src="/assets/screen4.png" alt="TTA Logo" />
          <p>한국정보통신기술협회(TTA) 주관 인턴십</p>
        </div>

        <div className="education-item">
          <img src="/assets/screen3.png" alt="KT Aivle Logo" />
          <p><span>KT Aivle School AI</span> 개발자 5기</p>
        </div>
      </section>

      <section className="certificate" id="certificate">
        <h1>Certificate</h1>

        <div className="certificate-item">
          <h2>숭실대 x 코드스테이츠 코딩 경진 대회 우수상</h2>
          <p>(2024.08.31)</p>
          <p>SSU x codestates Coding Competition 3rd</p>
          <a href="https://www.notion.so/AI-SW-Developer-4ac029b6100580c1be86f23070f01941?pvs=4#1ac029b6100580229cb0f764a39d3259" target="_blank" rel="noopener noreferrer">
          인증 링크
          </a>
        </div>

        <div className="certificate-item">
          <h2>KT Aivle School 빅프로젝트 최우수상</h2>
          <p>(2024.08.07)</p>
          <p>KT Aivle School Big Project 2nd / 32 teams</p>
        </div>

        <div className="certificate-item">
          <h2>KT Aivle School 코딩 마스터즈 1차 마스터</h2>
            <p>(2024.03.31)</p>
            <p>KT Aivle School Coding Masters Top 8%</p>
            <a href="https://www.openbadge-global.com/api/v1.0/openBadge/e/v2/Wallet/Public/GetAssertionShare/qkw1eHvrUEQzdE5DNG5SQTNsRWIWZz09" target="_blank" rel="noopener noreferrer">
            인증 링크
            </a>
        </div>
      </section>

      <section 
  className="thank-you-section" 
  id="thankyou"
  style={{
    backgroundImage: "url('/assets/screen1.png')",
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
    whileInView={{ opacity: 1 }}
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
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
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
    </div>
  );
};

export default Main;
