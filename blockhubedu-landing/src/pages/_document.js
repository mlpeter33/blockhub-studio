import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (  //time to test some fonts
    <Html lang="en">
      <Head>
        {/* Google Fonts links */}
        {/* Cabin sketch */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Londrina Sketch */}
       <link
        href="https://fonts.googleapis.com/css2?family=Londrina+Sketch&display=swap"
        rel="stylesheet"
        />
        {/* Shizuru */}
        <link
          href="https://fonts.googleapis.com/css2?family=Shizuru&display=swap"
          rel="stylesheet"
        />
        {/* Fredericka the Great */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap"
          rel="stylesheet"
        />
        {/* Just Another Hand */}
        <link
          href="https://fonts.googleapis.com/css2?family=Just+Another+Hand&display=swap"
          rel="stylesheet"
        />
        {/* Redacted Script */}
        <link
          href="https://fonts.googleapis.com/css2?family=Redacted+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}