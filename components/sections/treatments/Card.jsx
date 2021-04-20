import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Image from "next/image";

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
        <div className="relative">
          <div
            className="bg-black rounded-lg bg-opacity-75 w-full h-full fixed overflow-hidden"
            style={{
              zIndex: -1,
            }}
          >
            <Image
              loading="eager"
              src={imageUrl}
              alt={title}
              width="375px"
              height="250px"
              objectFit="cover"
            />
          </div>
          <div
            className="flex flex-col h-48 bg-cover rounded-lg"
            style={{
              background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 9.9%, rgba(12, 16, 31, 0.63) 80.21%)`,
            }}
          >
            <div className="mt-auto mb-6">
              <h3 className="mx-auto font-bold text-white text-lg tracking-widest">
                {title}
              </h3>
              <img
                className="mx-auto mt-3"
                src="images/arrow-down.svg"
                alt="Arrow down"
              />
            </div>
          </div>
        </div>

        <div className="shadow bg-primary-500 flex flex-col justify-between p-6 items-center mt-auto h-48 rounded-lg text-white ">
          <p className="block mx-auto font-bold text-white text-lg tracking-widest">
            {title}
          </p>
          <div className="font-sans">{description}</div>
          <div className="mx-auto">
            <img src="images/arrow-up.svg" alt="Arrow up" />
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};
