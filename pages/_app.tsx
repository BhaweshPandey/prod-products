import "@mantine/core/styles.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { NavigationProgress } from "@mantine/nprogress";

import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/carousel/styles.css";
import "../public/global.css";
import { theme } from "../theme";
import { I18nProvider } from "../context/i18nContext";
import { useCallback, useEffect, useState } from "react";

//setting up store

export default function App({ Component, pageProps }: AppProps) {

  const [isClient, setClient] = useState(false);
  
  useEffect(()=>{
    setClient(true)},[])
  

  return (
    <MantineProvider theme={theme} defaultColorScheme="light" >
      <Head>
        <title>Landing page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="We're the well known mobile app development company in kuwait who have experience and skilled team members who delivers the projects on time."
        />
        <link rel="canonical" href="https://landing.highpolar.in/" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="preload" as="image" href="/image/background_light.png" />
        <link rel="preload" as="image" href="/image/background_image.png" />
        <link rel="preload" as="image" href="/image/mobile_section.png" />
        
        



        {/* <link rel /> */}
      </Head>
      <Notifications />
      <NavigationProgress aria-label="navigation" />
      <ModalsProvider>
        <I18nProvider>
          <Component {...pageProps} />
        </I18nProvider>
      </ModalsProvider>
    </MantineProvider>
  );
}
