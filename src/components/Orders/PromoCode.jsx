import { useState } from "react";

const PromoCode = ({ className }) => {
  const [input, setInput] = useState("");

  return (
    <div className={`bg-white p-6 rounded-lg ${className}`}>
      <h5 className="mb-4">Promocodes</h5>
      <div className="relative w-full">
        <input
          className="py-2 px-3 text-primary w-full rounded-md border border-[#aeb4b9] bg-white shadow-[0_1px_0_0_#898f94_inset]"
          type="text"
          placeholder="Well20"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <span
          className="absolute top-1/2 right-2 -translate-y-1/2"
          onClick={() => setInput("")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 1.99951C5.582 1.99951 2 5.58151 2 9.99951C2 14.4185 5.582 17.9995 10 17.9995C14.418 17.9995 18 14.4185 18 9.99951C18 5.58151 14.418 1.99951 10 1.99951ZM7.70711 6.2928C7.31658 5.90228 6.68342 5.90228 6.29289 6.2928C5.90237 6.68333 5.90237 7.31649 6.29289 7.70702L8.58579 9.99991L6.29289 12.2928C5.90237 12.6833 5.90237 13.3165 6.29289 13.707C6.68342 14.0975 7.31658 14.0975 7.70711 13.707L10 11.4141L12.2929 13.707C12.6834 14.0975 13.3166 14.0975 13.7071 13.707C14.0976 13.3165 14.0976 12.6833 13.7071 12.2928L11.4142 9.99991L13.7071 7.70702C14.0976 7.31649 14.0976 6.68333 13.7071 6.2928C13.3166 5.90228 12.6834 5.90228 12.2929 6.2928L10 8.5857L7.70711 6.2928Z"
              fill="#DD1717"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default PromoCode;
