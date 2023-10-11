import { useRouter } from "next/router";
import { useEffect } from "react";

import "@/styles/globals.css";
import store from "@/toolkit/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import Support from "@/components/Utilities/Support";

import { appWithTranslation } from "next-i18next";
import SettingsBtn from "@/components/Utilities/Lang/SettingsBtn";

const App = ({ Component, pageProps }) => {
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
      router.pathname === "/contact-us" ||
      router.pathname === "/policy"
    ) {
      body.style.backgroundColor = "#ededed";
    } else {
      body.style.backgroundColor = "#ffffff";
    }

    if (localStorage.getItem("token")) {
      const loginTime = new Date(localStorage.getItem("loginTime"));
      const currentTime = new Date();

      loginTime.setMinutes(loginTime.getMinutes() + 30);

      if (currentTime > loginTime) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("loginTime");
      }
    }
  }, [router]);
  return (
    <Provider store={store}>
      <Toaster position="top-center" reverseOrder={false} />
      <Component {...pageProps} />
      <Support />
      <SettingsBtn />
    </Provider>
  );
};

export default appWithTranslation(App);
