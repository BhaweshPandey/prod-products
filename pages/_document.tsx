import { Html, Head, Main, NextScript } from 'next/document';
import { ColorSchemeScript } from '@mantine/core';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
