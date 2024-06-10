import React, { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
import "../styles/tailwind.scss";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "../styles/globals.scss";
import "slick-carousel/slick/slick-theme.css";
import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <> {getLayout(<Component {...pageProps} />)}</>
  );
}

export default MyApp;
