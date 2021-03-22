const Card = ({ title, description, imageUrl }) => (
  <div
    className="m-3 flex-grow-0 rounded-lg flex items-end flex-col w-full h-48 2xl:w-72"
    style={{
      maxWidth: "375px",
      background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 9.9%, rgba(12, 16, 31, 0.63) 80.21%), url(${imageUrl}) center`,
    }}
  >
    <span className="mx-auto font-bold text-white text-lg tracking-widest">
      {title}
    </span>
    <span className="mx-auto font-bold text-white text-lg tracking-widest">
      ^
    </span>
  </div>
);

export default Card;
