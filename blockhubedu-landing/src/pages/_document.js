import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (  //time to test some fonts
    <Html lang="en">
      <Head>
      </Head>
      <body>
       <svg id="sketch-filter">
          <filter id="sketchy-border">
             <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise"/>
             <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/>
          </filter>
       </svg>
          <Main />
          <NextScript />
      </body>
    </Html>
  );
}