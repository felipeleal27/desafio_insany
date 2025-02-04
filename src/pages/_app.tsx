import '../styles/globals.css';
import { AppProps } from 'next/app'; // Importando a tipagem AppProps do Next.js

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
