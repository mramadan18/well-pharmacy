// keen library for slider
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const SliderProduct = ({ data }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <div className="bg-white p-4 shadow-secondShadow rounded-lg">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide">
          <img src={data?.home_image} alt={data?.name} />
        </div>
        {data?.images?.map((img, index) => (
          <div key={index} className="keen-slider__slide number-slide">
            <img src={img} alt={data?.name} />
          </div>
        ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail">
        <div className="keen-slider__slide number-slide">
          <img src={data.home_image} alt={data.name} />
        </div>
        {data?.images?.map((img, index) => (
          <div key={index} className="keen-slider__slide number-slide">
            <img src={img} alt={data?.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderProduct;
