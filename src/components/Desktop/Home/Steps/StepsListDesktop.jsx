import StepItemDesktop from "./StepItemDesktop";

const steps = [
  {
    id: 1,
    title: "Select your products",
    img: "step_1.png",
    desc: "You can contact our pharmacists for help and consultations",
  },
  {
    id: 2,
    title: "Confirm your order",
    img: "step_2.png",
    desc: "We will contact you with prices before we ship the order to you",
  },
  {
    id: 3,
    title: "Shipment and delivery",
    img: "step_3.png",
    desc: "After confirming your order price, we will deliver the order to your address",
  },
];

const StepsListDesktop = () => {
  return (
    <section className="mt-[60px] text-center hidden lg:block">
      <div className="container">
        <h2 className="text-primary">How it works</h2>
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
