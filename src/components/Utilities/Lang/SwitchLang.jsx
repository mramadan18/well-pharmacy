import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Switch from "react-switch";

const SwitchLang = () => {
  const [checked,setchecked]=useState(false)

  const router = useRouter();

  const handleSwitch = (e) => {
    console.log(e,"eeeeee");
    setchecked(e)
   e ? handleChangeLanguage("ru") : handleChangeLanguage("en");
    router.reload();
  };

  const handleChangeLanguage = (locale) => {
    localStorage.setItem("lang",locale)
    // router.push(router.pathname, router.asPath, { locale });
  };
  useEffect(()=>{
    setchecked(localStorage?.getItem('lang')=="ru"?true:false)
  },[])
  

  return (
    <div className="flex items-center gap-2">
      <span className="ml-3 text-sm text-dark">EN</span>
      <label className="relative inline-flex items-center cursor-pointer">
      <Switch  offColor="#080" checkedIcon={false} uncheckedIcon={false} onChange={handleSwitch} checked={checked} />

        {/* <div className=" bg-black-switch w-10 h-6 bg-primary  rounded-full peer-checked:after:translate-x-full after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        */}
         <span className="ml-3 text-sm text-dark">RS</span>
      </label>
    </div>
  );
};

export default SwitchLang;
