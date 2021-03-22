import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = ({ title, description, imageUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="m-3 w-full h-48 2xl:w-72 treatment-card"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          className="shadow flex flex-col h-48 rounded-lg"
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 9.9%, rgba(12, 16, 31, 0.63) 80.21%), url(${imageUrl}) center`,
          }}
        >
          <div className="mt-auto mb-6">
            <div className="mx-auto font-bold text-white text-lg tracking-widest">
              {title}
            </div>
            <img
              className="mx-auto mt-3"
              src="images/arrow-down.svg"
              alt="Arrow down"
            />
          </div>
        </div>

        <div className="shadow bg-primary-500 flex flex-row flex-wrap items-center mt-auto h-48 rounded-lg text-white ">
          <div className="mx-auto font-bold text-white text-lg tracking-widest">
            {title}
          </div>
          <div className="px-5 font-sans">{description}</div>
          <div className="mx-auto">
            <img src="images/arrow-up.svg" alt="Arrow up" />
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
