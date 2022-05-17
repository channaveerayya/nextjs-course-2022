import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <div className="container mt-2">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
