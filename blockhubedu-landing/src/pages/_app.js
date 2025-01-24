import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <title>BlockHub Studio</title>
    <meta name="description" content="BlockHub Studio is a platform for learning blockchain development." />
    <link rel="icon" href="/Icon.png" />
</Head>
<Component {...pageProps} />
</>
);
}

export default MyApp;