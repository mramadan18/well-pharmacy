import { useState } from "react";
import Image from "next/image";
// Images
import upload from "#/images/icons/arrow_up.png";

const UploadFile = ({ setFile }) => {
  const [img, setImg] = useState(upload);

  const handleChangeFile = (e) => {
    const imgUpload = URL.createObjectURL(e.target.files[0]);
    setImg(imgUpload);
    setFile(e.target.files[0]);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center border border-[#AEB4B9] relative py-10">
      <label
        htmlFor="upload-img"
        className="flex flex-col justify-center items-center"
      >
        <Image src={img} alt="Next.js Logo" width={100} height={100} priority />
        <div className="flex justify-center items-center mt-5 w-[120px] h-[40px] border border-[#858383] font-bold">
          Add Files
        </div>
      </label>
      <p className="text-[#6B7177] mt-3 text-sm">Or drop files to upload</p>
      <input
        type="file"
        accept="image/*"
        id="upload-img"
        className="w-full h-full top-0 left-0 bg-transparent absolute opacity-0 cursor-pointer"
        onChange={handleChangeFile}
      />
    </div>
  );
};

export default UploadFile;
