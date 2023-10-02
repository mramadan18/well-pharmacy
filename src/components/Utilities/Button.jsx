import { useSelector } from "react-redux";
import Loading from "./Loading";

const Button = ({ children, className, type = "button", onClick }) => {
  return (
    <button
      type={type}
      className={`bg-primary text-white py-2 rounded-md font-semibold tracking-[1px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
