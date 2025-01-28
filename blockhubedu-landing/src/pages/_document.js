import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (  //time to test some fonts
    <Html lang="en">
      <Head>
      </Head>
      <body>
       <svg id="sketch-filter">
          <filter id="sketchy">
            <feTurbulence type="fractalNoise" baseFrequency="3" numOctaves="1" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5"/>
          </filter>
       </svg>
          <Main />
          <NextScript />
      </body>
    </Html>
  );
}