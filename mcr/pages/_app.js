import '../styles/globals.css';
import '../styles/Home.module.css';
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
