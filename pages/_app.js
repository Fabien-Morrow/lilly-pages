import Head from "next/head";
import Layout from "./layout";
import { MantineProvider } from "@mantine/core";
import "./globals.css";
export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          breakpoints: {
            sm: "40em",
            md: "48em",
            lg: "64em",
            xl: "80em",
            xxl: "96em",
          },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}
