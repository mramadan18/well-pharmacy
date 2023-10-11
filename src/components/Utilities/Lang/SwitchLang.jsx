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
    <div className="flex items-center gap-4">
      <span className="ml-3 text-sm font-bold text-white">EN</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={handleSwitch}
        />
        <div className="w-20 h-10 bg-primary rounded-full peer-checked:after:translate-x-full after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-9 after:w-9 after:transition-all"></div>
        <span className="ml-3 text-sm font-bold text-white">RS</span>
      </label>
    </div>
  );
};

export default SwitchLang;
