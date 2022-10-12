import "aos/dist/aos.css";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCookie } from "../helper";
import "../styles/common.css";
import "../styles/globals.css";

function RarestSocietyMain({ Component, pageProps }) {
  const router = useRouter();

  React.useEffect(() => {
    const ageVerified = getCookie("ageVerified");
    if (ageVerified !== "true") {
      // cookie returns true as a string
      router.push("/age-verification");
    }
  }, []);

  return (
    <>
      <Head>
        <title>The Macallan</title>
        <meta name="description" content="Coming Soon" />
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default RarestSocietyMain;
