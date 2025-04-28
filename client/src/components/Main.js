import React from "react";
import { Link } from "react-scroll"; // 페이지 내부 이동용
import { motion } from "framer-motion";
import styles from "../components/Main.module.css"; // CSS 모듈로 import
import 'bootstrap-icons/font/bootstrap-icons.css';

const Main = () => {
  const letters = "THANK YOU".split("");
  return (
    <div className={styles.main}>
      <div className={styles.mainBody}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.navLeft}>
          <a href="https://www.notion.so/AI-SW-Developer-1ac029b6100580c1be86f2307f081941#1ac029b6100580229cb0f764a39d3259" target="_blank" rel="noopener noreferrer">
            <img src="/assets/notion-icon.png" alt="Notion" className={styles.notionIcon} />
          </a>
        </div>
        <div className={styles.navRight}>
          <nav className={styles.navMenu}>
            <Link to="skills" smooth={true} duration={500}>Skills</Link>
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
            <Link to="education" smooth={true} duration={500}>Education</Link>
            <Link to="certificate" smooth={true} duration={500}>Certificate</Link>
          </nav>
        </div>
      </header>

      {/* Main Background */}
      <section className={styles.intro} style={{ backgroundImage: "url('/assets/screen1.png'), linear-gradient(rgba(25, 0, 255, 0.05), rgba(25, 0, 255, 0.05))" }}>
        <div className={styles.introText}>
          <h1>Introduction</h1>
          <h2>안녕하세요<br /><strong>백엔드 개발자 이수민</strong>입니다.</h2>
          <p>미래의 산업이 필요로 하는 엔지니어가 되려고 노력합니다.</p>
        </div>
      </section>

      {/* About Me Section */}
      <section className={styles.aboutMe} id="aboutme">
        <div className={styles.aboutLeft}>
          <h1>ABOUT ME</h1>
          <ul>
            <li>👤 LEE SUMIN  ✉️ hojun7766@naver.com</li>
            <li>🎂 98.05.10  🏫 <span className={styles.koreanFont}>인천대학교 정보통신공학과</span></li>
          </ul>
        </div>
        <div className={styles.aboutRight}>
          <img src="/assets/screen2.png" alt="Profile" className={styles.profileImage} />
        </div>
      </section>

      <section className={styles.skills} id="skills">
        <h1>SKILLS</h1>
        <div className={styles.skillsCard}>
          <ul className={styles.skillsList}>
              <li className={styles.skillCategory}>
              💻 <span className={styles.categoryTitle}>Front-end</span> 
                  <span className={styles.skillItem}>Vue.js</span>/
                  <span className={styles.skillItem}>React</span>/
                  <span className={styles.skillItem}>Next.js</span>
              </li>

          <li className={styles.skillCategory}>
              🛠️ <span className={styles.categoryTitle}>Back-end</span> 
                  <span className={styles.skillItem}>Python</span>/
                  <span className={styles.skillItem}>Java</span>/
                  <span className={styles.skillItem}>Spring</span>/
                  <span className={styles.skillItem}>Flask</span>/
        <span className={styles.skillItem}>JPA</span>/
        <span className={styles.skillItem}>MyBatis</span>
      </li>

      <li className={styles.skillCategory}>
        🗄️ <span className={styles.categoryTitle}>Database</span> 
        <span className={styles.skillItem}>Oracle DB</span>/
        <span className={styles.skillItem}>PostgreSQL</span>
      </li>

      <li className={styles.skillCategory}>
        ⚙️ <span className={styles.categoryTitle}>Others</span> 
        <span className={styles.skillItem}>Git</span>/
        <span className={styles.skillItem}>PyTorch</span>/
        <span className={styles.skillItem}>Pandas</span>
      </li>
    </ul>
  </div>
</section>


<section className={styles.projects} id="projects">
  <h1>Projects</h1>

  <div className={styles.projectCard}>
    <h2>Bible <span>(25.02.03~25.02.14)</span></h2>
    <p>온라인 도서 대여 서비스</p>
    <a href="https://github.com/hyeran0920/Bible" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
      <i className="bi bi-github"></i>
    </a>
  </div>

  <div className={styles.projectCard}>
    <h2>milgam <span>(24.06.17~24.07.26)</span></h2>
    <p>AI를 활용한 인파밀집 및 이상행동 검출 서비스</p>
    <a href="https://github.com/K-Saaan/milgam" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
      <i className="bi bi-github"></i>
    </a>
  </div>
</section>

      
<section className={styles.education} id="education">
  <h1>Education</h1>

  <div className={styles.educationItem}>
    <img src="/assets/screen5.png" alt="KOSA Logo" />
    <p>
      <span className={styles.eng}>kosa java</span> 
      <span className={styles.kor}>개발자 양성 과정</span>
    </p>
  </div>

  <div className={styles.educationItem}>
    <img src="/assets/screen4.png" alt="TTA Logo" />
    <p>
      <span className={styles.kor}>한국정보통신기술협회(TTA) 주관 인턴십</span>
    </p>
  </div>

  <div className={styles.educationItem}>
    <img src="/assets/screen3.png" alt="KT Aivle Logo" />
    <p>
      <span className={styles.eng}>KT Aivle School AI</span> 
      <span className={styles.kor}>개발자 5기</span>
    </p>
  </div>
</section>

      <section className={styles.certificate} id="certificate">
        <h1>Certificate</h1>

        <div className={styles.certificateItem}>
          <h2>숭실대 x 코드스테이츠 코딩 경진 대회 우수상</h2>
          <p>(2024.08.31)</p>
          <p>SSU x codestates Coding Competition 3rd</p>
          <a href="https://www.notion.so/AI-SW-Developer-4ac029b6100580c1be86f23070f01941?pvs=4#1ac029b6100580229cb0f764a39d3259" target="_blank" rel="noopener noreferrer">
            인증 링크
          </a>
        </div>

        <div className={styles.certificateItem}>
          <h2>KT Aivle School 빅프로젝트 최우수상</h2>
          <p>(2024.08.07)</p>
          <p>KT Aivle School Big Project 2nd / 32 teams</p>
        </div>

        <div className={styles.certificateItem}>
          <h2>KT Aivle School 코딩 마스터즈 1차 마스터</h2>
          <p>(2024.03.31)</p>
          <p>KT Aivle School Coding Masters Top 8%</p>
          <a href="https://www.openbadge-global.com/api/v1.0/openBadge/e/v2/Wallet/Public/GetAssertionShare/qkw1eHvrUEQzdE5DNG5SQTNsRWIWZz09" target="_blank" rel="noopener noreferrer">
            인증 링크
          </a>
        </div>
      </section>

      <section className={styles.thankYouSection} id="thankyou">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1 className={styles.messageTitle}>찾아봐주셔서 정말 감사합니다</h1>
        <br></br>
        <h2 className={styles.messageSubtitle}>앞으로가 기대되는 개발자가 되겠습니다</h2>
      </motion.div>

      <div className={styles.thankYouLetters}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 + index * 0.2 }} // 2초 후부터 순차적으로
            className={styles.letter}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <footer className={styles.footer}>
        2025. Lee Sumin. All rights reserved. <br />
        made by React
      </footer>
    </section>

    </div>
    </div>
  );
};

export default Main;
