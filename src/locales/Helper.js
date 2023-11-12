"use client";

import { EnTrans } from "./en/common";
import { RsTrans } from "./rs/common";

import { useEffect, useState } from "react";

export const useTrans = () => {
  const [File, setFile] = useState(EnTrans);
  const handleTrans = () => {
    const ISSERVER = typeof window === "undefined";
    if (ISSERVER) {
      return;
    }
    const lang = localStorage.getItem("lang");
    setFile(lang == "en" || !lang ? EnTrans : RsTrans);
    return lang == "en" || !lang ? EnTrans : RsTrans;
  };

  useEffect(() => {
    handleTrans();
  }, []);

  return File;
};
