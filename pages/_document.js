import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head />
        <body className="m-auto max-w-[1440px] bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
