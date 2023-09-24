import Image from "next/image";

const ServiceItem = ({ data }) => {
  return (
    <div className="flex justify-center items-start gap-2 text-primary my-2">
      <Image
        src={`/images/${data.img}`}
        alt={data.title}
        width={116}
        height={116}
        priority
        className="w-[116px] h-[116px] rounded-lg"
      />
      <div className="text-start ml-1">
        <h3 className="mb-2 lg:mb-6 text-lg lg:text-xl">{data.title}</h3>
        <p className="font-medium">{data.desc}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
