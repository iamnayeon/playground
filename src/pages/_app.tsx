import "../styles/index.scss";
import type { AppProps } from "next/app";
import { GlobalStyles } from "utils/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
