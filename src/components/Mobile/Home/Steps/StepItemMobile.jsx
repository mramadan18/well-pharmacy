import Image from "next/image";

const StepItemMobile = ({ data }) => {
  return (
    <div className="bg-primary text-white rounded-lg pt-4 pb-10  px-2">
      <h3 className="text-center text-lg mb-4">How it works</h3>

      <div className="grid grid-cols-[100px_1fr] gap-2">
        <div>
          <Image
            className="w-full"
            src={`/images/${data.img}`}
            alt={data.title}
            width={100}
            height={80}
            priority
          />
        </div>
        <div>
          <h6 className="font-normal">Step {data.id}</h6>
          <h4 className="font-normal my-1">{data.title}</h4>
          <p className="text-sm">{data.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default StepItemMobile;
