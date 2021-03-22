export const TestimonialCard = ({ pictureUrl, name, children }) => {
  return (
    <div className="bg-white w-full rounded-xl relative my-10 shadow-lg">
      <img
        className={`
          shadow-lg block m-auto absolute 
          transform left-1/2 -translate-x-1/2 -translate-y-1/2
          rounded-full w-24 h-24 border-white border-4`}
        src={pictureUrl}
        alt={`Photo of ${name}`}
      />

      <div className="mt-12 p-5">
        <p className="font-sans text-bluegray-400">{children}</p>

        <legend className="font-signature text-basic-800 text-xl mt-3">
          {name}
        </legend>
      </div>
    </div>
  );
};
