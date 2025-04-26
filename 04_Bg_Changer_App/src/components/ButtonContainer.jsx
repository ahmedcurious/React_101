import Button from "./Button";
import PropTypes from "prop-types";
import { colorMap } from "./colorMap";

function ButtonContainer({ bgSetter }) {
  console.log(bgSetter);
  return (
    <div
      className="flex flex-row flex-wrap justify-center gap-6 px-9 py-6 bg-white rounded-4xl border-2 
    border-slate-400 shadow-2xl"
    >
      {Object.keys(colorMap).map((key, index) => {
        return (
          <Button
            buttonText={key}
            onClick={() => bgSetter(key)}
            buttonColor={key}
            key={index}
          />
        );
      })}
    </div>
  );
}

ButtonContainer.propTypes = {
  bgSetter: PropTypes.func,
};

export default ButtonContainer;
