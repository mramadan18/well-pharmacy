import VerificationSection from "@/components/Auth/VerificationSection";
import LeftSection from "@/components/Desktop/Auth/LeftSection";
// Images
import verify from "#/images/verify.png";

const Verification = () => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-2 min-h-[100vh] bg-white relative">
      <LeftSection img={verify} />
      <VerificationSection />
    </div>
  );
};

export default Verification;
