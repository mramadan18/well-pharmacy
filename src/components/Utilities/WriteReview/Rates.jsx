import Image from "next/image";

// Images
import terrible from "#/images/icons/star_terrible.png";
import bad from "#/images/icons/star_bad.png";
import ok from "#/images/icons/star_ok.png";
import greet from "#/images/icons/star_great.png";
import good from "#/images/icons/star_good.png";
import terribleGold from "#/images/icons/terribleGold.png";
import badGold from "#/images/icons/badGold.png";
import okGold from "#/images/icons/okGold.png";
import goodGold from "#/images/icons/goodGold.png";
import greetGold from "#/images/icons/greetGold.png";

const Rates = ({ rate, setRate }) => {
  const handleStarClick = (selectedRating) => {
    setRate(selectedRating);
  };

  const renderStars = () => {
    const starImgs = [
      { imgSrc: terrible, nameImg: "Terrible", targetImg: terribleGold },
      { imgSrc: bad, nameImg: "Bad", targetImg: badGold },
      { imgSrc: ok, nameImg: "Ok", targetImg: okGold },
      { imgSrc: good, nameImg: "Good", targetImg: goodGold },
      { imgSrc: greet, nameImg: "Greet", targetImg: greetGold },
    ];
    const starElements = starImgs.map((item, index) => {
      return (
        <div
          key={index}
          className="flex flex-col justify-center items-center"
          onClick={() => handleStarClick(index + 1)}
        >
          <Image
            key={index}
            src={index + 1 === rate ? item.targetImg : item.imgSrc}
            alt={item.nameImg}
          />
          <span className="fs-6 fw-bolder mt-1">{item.nameImg}</span>
        </div>
      );
    });
    return starElements;
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-2 lg:gap-10">
        {renderStars()}
      </div>
    </div>
  );
};

export default Rates;
