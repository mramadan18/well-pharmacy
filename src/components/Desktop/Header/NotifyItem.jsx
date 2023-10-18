import { useTranslation } from "react-i18next";

const NotifyItem = ({ newNotify, data }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`pl-4 py-2 pr-10 mb-3 text-base text-[#2F3032] rounded-md relative cursor-pointer hover:opacity-80 ${
        newNotify ? "bg-[rgba(15,67,146,0.1)]" : "bg-white"
      }`}
    >
      <span className="absolute top-2 right-2 text-xs p-1 rounded-md tracking-[1px] bg-[#C3EFB9] text-[#219653]">
        {t("Offer")}
      </span>
      {data.message}
    </div>
  );
};

export default NotifyItem;
