import PropTypes from "prop-types";

function Card({ text,imageLink }) {
  return (
    <div className="w-60 h-60 rounded-xl">
      <img
        src={imageLink}
        alt="Giphy"
        className="rounded-t-xl h-60"
      />
      <div className="bg-white/30 backdrop-blur-lg border border-white/20 py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
        <h1 className="font-bold  font-mono  text-xl">{text}</h1>
      </div>
    </div>
  );
}

Card.propTypes = {
  text: PropTypes.string,
  imageLink: PropTypes.string,
};

export default Card;
