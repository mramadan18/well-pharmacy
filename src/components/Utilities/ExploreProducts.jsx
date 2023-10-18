import Link from "next/link";
import { useTranslation } from "react-i18next";

const ExploreProducts = () => {
  const { t } = useTranslation();
  return (
    <Link href="/contact-us" className="w-full">
      <div className="bg-white p-4 border border-[#979797] flex justify-between items-center rounded-lg">
        <h4 className="text-second font-medium text-base">
          {t("Explore our products or")}
        </h4>
        <button className="py-2 px-2 lg:px-20 bg-white text-primary border-2 border-primary rounded-lg">
          {t("Contact a pharmacist")}
        </button>
      </div>
    </Link>
  );
};

export default ExploreProducts;
