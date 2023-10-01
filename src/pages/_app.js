import { useRouter } from "next/router";
import { useEffect } from "react";

import "@/styles/globals.css";
import store from "@/toolkit/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const body = document.querySelector("body");
    if (
      router.pathname === "/all-reviews" ||
      router.pathname === "/cart" ||
      router.pathname === "/orders" ||
      router.pathname === "/confirmation" ||
      router.pathname === "/edit-info" ||
      router.pathname === "/tracking" ||
      router.pathname === "/contact-us"
    ) {
      body.style.backgroundColor = "#ededed";
    } else {
      body.style.backgroundColor = "#ffffff";
    }
  }, [router]);
  return (
    <Provider store={store}>
      <Toaster position="top-center" reverseOrder={false} />
      <Component {...pageProps} />
    </Provider>
  );
}
