import { useTrans } from "@/locales/Helper";
import Image from "next/image";
const StepItemDesktop = ({ data }) => {
  const t=useTrans()

  return (
    <div className="bg-[#0f43921a] p-5 text-primary rounded-2xl">
      <h3 className="font-normal">
        {t["Home"]} {data.id}
      </h3>
      <h3>{data.title}</h3>
      <Image
        src={`/images/${data.img}`}
        width={300}
        height={240}
        alt={data.title}
        priority
        className="my-6 mx-auto"
      />
      <p className="px-8">{data.desc}</p>
    </div>
  );
};

export default StepItemDesktop;
