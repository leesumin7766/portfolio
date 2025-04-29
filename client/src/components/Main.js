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
            <Link to="certificate" smooth={true} duration={500}>Awards</Link>
            <Link to="certificate" smooth={true} duration={500}>certificate</Link>
          </nav>
        </div>
      </header>

      {/* Main Background */}
      <section className={styles.intro} style={{ backgroundImage: "url('/assets/screen1.png'), linear-gradient(rgba(0, 0, 255, 0.05), rgba(0, 0, 255, 0.05))",
        backgroundBlendMode: "darken",
       }}>
        <div className={styles.introText}>
          <h1>Introduction</h1>
          <h2>안녕하세요<br/>백엔드 개발자 <span className={styles.highlightName}>이수민</span>입니다</h2><p></p>
          <div className ={styles.introP}>
          <h4>다양한 툴을 능숙하게 다루는 개발자를 목표로 성장하고 있습니다<br></br>
            AI에 대한 깊은 관심을 바탕으로 데이터 분석과 머신러닝 기술을 프로젝트에 적용해왔습니다<br></br>
          끊임없는 도전과 협업을 통해 다양한 프로젝트를 경험하며 성취감을 얻습니다</h4>
          </div>
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
              <li className={styles.skillCategory1}>
              💻 <span className={styles.categoryFront}>Front-end</span> 
                  <span className={styles.skillItem}>Vue.js</span>
                  <span className={styles.skillItem}>React</span>
                  <span className={styles.skillItem}>Next.js</span>
              </li>

          <li className={styles.skillCategory2}>
              🛠️ <span className={styles.categoryBack}>Back-end</span> 
                  <span className={styles.skillItem}>Python</span>
                  <span className={styles.skillItem}>Java</span>
                  <span className={styles.skillItem}>Spring</span>
                  <span className={styles.skillItem}>Flask</span>
        <span className={styles.skillItem}>JPA</span>
        <span className={styles.skillItem}>MyBatis</span>
      </li>

      <li className={styles.skillCategory3}>
        🗄️ <span className={styles.categoryDatabase}>Database</span> 
        <span className={styles.skillItem}>Oracle DB</span>
        <span className={styles.skillItem}>PostgreSQL</span>
      </li>

      <li className={styles.skillCategory4}>
        ⚙️ <span className={styles.categoryOthers}>Others</span> 
        <span className={styles.skillItem}>Git</span>
        <span className={styles.skillItem}>PyTorch</span>
        <span className={styles.skillItem}>Pandas</span>
        <span className={styles.skillItem}>Jira</span>
      </li>
    </ul>
  </div>
</section>


<section className={styles.projects} id="projects">
  <h1>Projects</h1>

  <div className={styles.projectCard}>
    <h2>Bible <span>온라인 도서관 서비스</span> <span>(25.02.03~25.02.14)</span></h2>
    <p>도서 추천 시스템 풀스택 개발</p>
    <p className={styles.tools}><i class="bi bi-tools"></i> Tools</p> 
    <p className={styles.projecttools}>Spring 3.4.1 / mybatis 3.0.4 / OracleDB 21 / vue.js 3.0 / JUNIT 5 / Tomcat 10.1 / git / flask 3.0.3 / LightFM</p>
    <p></p>
    <a href="https://github.com/hyeran0920/Bible" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
      <i className="bi bi-github"></i>
    </a>
  </div>

  <div className={styles.projectCard}>
    <h2>milgam <span>AI를 활용한 인파밀집 및 이상행동 검출 서비스</span> <span>(24.06.17~24.07.26)</span></h2>
    <p>회원 관리자 로그인 백엔드 개발</p>
    <p className={styles.tools}><i class="bi bi-tools"></i> Tools</p> 
    <p className={styles.projecttools}>Spring 2.7.3 / java 11 / gradle / PostgreSQL / supabase 2.5.3 / flask 3.0.3 / numpy 1.26.4 / opencv 4.10.0</p>
    <p></p>
    <a href="https://github.com/K-Saaan/milgam" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
      <i className="bi bi-github"></i>
    </a>
  </div>
</section>

      
<section className={styles.education} id="education">
  <h1>Education</h1>

  <div className={styles.educationItem}>
    <img src="/assets/screen5.png" alt="KOSA Logo" />
    <div>
      <span className={styles.eng}>kosa java</span> 
      <span className={styles.kor}>개발자 양성 과정 수료</span>
      <p className={styles.dateTime}>(2024.12.02 - 2025.02.28) <strong>480Hours</strong></p>
      <p className={styles.eduText}>- Java, Js, OracleDB 교육 및 프로젝트</p>
    </div>
  </div>

  <div className={styles.educationItem}>
    <img src="/assets/screen4.png" alt="TTA Logo" />
    <div>
      <span className={styles.kor}>한국정보통신기술협회(TTA) 주관 인턴십</span>
      <p className={styles.dateTime}>(2024.10.21 - 2024.11.27) <strong>2months</strong></p>
      <p className={styles.eduText}>IT 제품 품질테스트 SQA업무</p>
      <p className={styles.eduText}>VMware를 활용한 윈도우와 리눅스 서버 간의 애플리케이션 연동 테스트를 진행</p>
      <p className={styles.eduText}>젠데스크 환경에서 HTML5와 CSS를 활용하여 제품 헬프 데스크 UI 개선 업무를 진행</p>
    </div>
  </div>

  <div className={styles.educationItem}>
    <img src="/assets/screen3.png" alt="KT Aivle Logo" />
    <div>
      <span className={styles.eng}>KT Aivle School AI</span> 
      <span className={styles.kor}>개발자 5기 수료</span>
      <p className={styles.dateTime}>(2024.02.20 - 2024.08.07) <strong>840Hours</strong></p>
      <p className={styles.eduText}>- 인공지능, 데이터분석, Python 교육 및 프로젝트</p>
    </div>
  </div>
</section>

      <section className={styles.certificate} id="certificate">
        <h1>Awards</h1>

        <div className={styles.certificateCard}>
          <div className={styles.titleWrapper}>
          <h2>숭실대 x 코드스테이츠 코딩 경진 대회 우수상</h2>
          <div className={styles.iconWrapper}>
            <ion-icon name="trophy-outline" className={styles.icon}></ion-icon>
            <span className={styles.number}> 3rd</span>
          </div>
          </div>
          <p>(2024.08.31)</p>
          <p>Leader</p>
          <p>SSU x codestates Coding Competition <span className="highlight">3rd</span></p>
          <a href="https://www.notion.so/AI-SW-Developer-4ac029b6100580c1be86f23070f01941?pvs=4#1ac029b6100580229cb0f764a39d3259" target="_blank" rel="noopener noreferrer">
          Aceess Link
          </a>
        </div>

        <div className={styles.certificateCard}>
        <div className={styles.titleWrapper2}>
          <h2>KT Aivle School 빅프로젝트 최우수상</h2>
          <div className={styles.iconWrapper}>
            <ion-icon name="trophy-outline" className={styles.icon}></ion-icon>
            <span className={styles.number}> 2rd</span>
          </div>
          </div>
          <p>(2024.08.07)</p>
          <p>Teammate</p>
          <p>KT Aivle School Big Project <span className="highlight">2nd / 32 teams</span></p>
        </div>

        <div className={styles.certificateCard}>
        <div className={styles.titleWrapper3}>
          <h2>KT 코딩마스터즈 마스터</h2>
            <div className={styles.iconWrapper}>
              <ion-icon name="trophy-outline" className={styles.icon}></ion-icon>
              <span className={styles.number}> TOP 8%</span>
            </div>
          </div>
          <p>(2024.03.31)</p>
          <p>Solo</p>
          <p>KT Aivle School Coding Masters <span className="highlight">Top 8%</span></p>
          <a href="https://www.openbadge-global.com/api/v1.0/openBadge/e/v2/Wallet/Public/GetAssertionShare/qkw1eHvrUEQzdE5DNG5SQTNsRWIWZz09" target="_blank" rel="noopener noreferrer">
            Aceess Link
          </a>
        </div>
      </section>

      <section className={styles.thankYouSection} style={{ backgroundImage: "url('/assets/screen1.png'), linear-gradient(rgba(25, 0, 255, 0.05), rgba(25, 0, 255, 0.05))",
        backgroundBlendMode: "darken",
       }}>
      <div className={styles.thankText}>
        <motion.div
          initial={{ opacity: 0, y: 80 }}  // 처음에는 안 보이고, 아래로 내려온 상태
          whileInView={{ opacity: 1, y: 0 }} // 50% 이상 보일 때 애니메이션이 시작되어 부드럽게 올라가고 보임
          viewport={{ once: false, amount: 0.5 }}  // 50% 이상 보였을 때 애니메이션이 시작됨
          transition={{ duration: 1, ease: "easeOut" }}  // 1.5초 동안 부드럽게 나타나도록 설정
          className={styles.messageTitle}
        >
          찾아봐주셔서 정말 감사합니다
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}  // 처음에는 안 보이고, 아래로 내려온 상태
          whileInView={{ opacity: 1, y: 0 }} // 50% 이상 보일 때 애니메이션이 시작되어 부드럽게 올라가고 보임
          viewport={{ once: false, amount: 0.5 }}  // 50% 이상 보였을 때 애니메이션이 시작됨
          transition={{ duration: 1.5, ease: "easeOut" }}  // 1.5초 동안 부드럽게 나타나도록 설정
          className={styles.messageSubtitle}
        > 
          미래를 기대하게 만드는 개발자가 되겠습니다
        </motion.div>
      </div>
      <div className={styles.thankYouLetters}>
        {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}   // 각 글자가 처음에 조금 아래에 위치
          animate={{ opacity: 1, y: 0 }}    // 애니메이션 시 위로 올라오며 보이게 됨
          transition={{ delay: 2 + index * 0.2, duration: 1.5, ease: "easeOut" }} // 순차적으로 등장, 1.5초 동안
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
