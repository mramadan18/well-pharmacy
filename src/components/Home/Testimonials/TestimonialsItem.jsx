import Image from "next/image";
// Import images
import starSmGold from "#/images/star_sm_gold.png";
import starSmGray from "#/images/star_sm_gray.png";

const TestimonialsItem = ({ data }) => {
  return (
    <div className="review-item flex justify-center items-start bg-white text-primary lg:shadow-[0_18px_40px_0_rgba(0,0,0,0.12)] rounded-md p-5">
      <Image
        src={`/images/${data.img}`}
        alt={data.name}
        width={55}
        height={55}
        priority
        className="w-[55px] h-[55px]"
      />
      <div className="text-start ml-5">
        <h3 className="mb-2">{data.name}</h3>
        <div className="flex justify-start items-start gap-2 mt-3 mb-2">
          {Array(data?.rate)
            ?.fill(0)
            ?.map((data, i) => (
              <Image key={i} src={starSmGold} alt="star" />
            ))}
          {Array(5 - data?.rate)
            ?.fill(0)
            ?.map((data, i) => (
              <Image key={i} src={starSmGray} alt="star" />
            ))}
        </div>
        <p className="font-medium text-black text-sm">{data.desc}</p>
      </div>
    </div>
  );
};

export default TestimonialsItem;
