import React from "react";
import { AppProps } from "next/app";
import "../styles/tailwind.scss";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
