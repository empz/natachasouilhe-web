import { useState } from "react";
import ReactCardFlip from "react-card-flip";

export const Card = ({ title, description, imageUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`w-96 h-48 mx-auto my-3
        md:w-80 md:mx-3
        xl:w-72`}
      style={{ maxWidth: "355px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          className="shadow flex flex-col h-48 rounded-lg bg-cover"
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 9.9%, rgba(12, 16, 31, 0.63) 80.21%), url(${imageUrl}) no-repeat center`,
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

        <div className="shadow bg-primary-500 flex flex-col justify-between p-6 items-center mt-auto h-48 rounded-lg text-white ">
          <div className="mx-auto font-bold text-white text-lg tracking-widest">
            {title}
          </div>
          <div className="font-sans">{description}</div>
          <div className="mx-auto">
            <img src="images/arrow-up.svg" alt="Arrow up" />
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};
