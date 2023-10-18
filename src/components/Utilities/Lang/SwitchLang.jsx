import { useRouter } from "next/router";

const SwitchLang = () => {
  const router = useRouter();

  const handleSwitch = (e) => {
    e.target.checked ? handleChangeLanguage("rs") : handleChangeLanguage("en");
  };

  const handleChangeLanguage = (locale) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div className="flex items-center gap-2">
      <span className="ml-3 text-sm text-dark">EN</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={handleSwitch}
        />
        <div className="w-10 h-6 bg-primary  rounded-full peer-checked:after:translate-x-full after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        <span className="ml-3 text-sm text-dark">RS</span>
      </label>
    </div>
  );
};

export default SwitchLang;
