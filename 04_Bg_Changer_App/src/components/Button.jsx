import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { colorMap } from "./colorMap";

function Button({ buttonText, onClick, buttonColor }) {
  const getColorClasses = (color) => {
    return (
      colorMap[color] || {
        bg: "bg-gray-600",
        border: "border-gray-300",
        hoverBg: "hover:bg-gray-900",
        hoverBorder: "hover:border-gray-50",
      }
    );
  };

  const colors = getColorClasses(buttonColor);

  const buttonClass = twMerge(
    "px-9 py-4 shadow",
    colors.bg,
    colors.border,
    "border-2",
    colors.hoverBg,
    "hover:shadow-2xl",
    colors.hoverBorder,
    "rounded-3xl text-2xl font-medium"
  );

  return (
    <button className={buttonClass} onClick={onClick}>
      {buttonText}
    </button>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  buttonColor: PropTypes.string,
};

export default Button;
