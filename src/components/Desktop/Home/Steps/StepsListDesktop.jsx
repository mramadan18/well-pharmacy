import StepItemDesktop from "./StepItemDesktop";
import { useEffect, useState } from "react";
import { useTrans } from "@/locales/Helper";

const StepsListDesktop = () => {
  const t=useTrans()

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  const steps = [
    {
      id: 1,
      title: t["Select your products"],
      img: "step_1.png",
      desc: t["You can contact our pharmacists for help and consultations"],
    },
    {
      id: 2,
      title: t["Confirm your order"],
      img: "step_2.png",
      desc: t[
        "We will contact you with prices before we ship the order to you"
      ],
    },
    {
      id: 3,
      title: t["Shipment and delivery"],
      img: "step_3.png",
      desc: t[
        "After confirming your order price, we will deliver the order to your address"
      ],
    },
  ];
  return (
    <section className="mt-[60px] text-center hidden lg:block">
      <div className="container">
        <h2 className="text-primary">{t["How it works"]} </h2>
        <div className="grid grid-cols-3 gap-4 mt-[30px]">
          {steps.map((step) => (
            <StepItemDesktop key={step.id} data={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsListDesktop;
