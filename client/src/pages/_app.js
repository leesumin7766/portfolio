// pages/_app.js
import '../components/GoTo.module.css';  
import '../components/Main.module.css';  
// import '../styles/globals.css'; 
import useSWR from 'swr'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
