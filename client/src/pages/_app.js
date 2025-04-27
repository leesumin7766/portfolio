// pages/_app.js
import '../components/GoTo.css';  // GoTo.css 올바른 경로
import '../components/Main.css';  // Main.css 올바른 경로

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
