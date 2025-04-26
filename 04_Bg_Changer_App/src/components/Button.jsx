import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

function Button({ buttonText, onClick, buttonColor }) {
  const getColorClasses = (color) => {
    const colorMap = {
      red: {
        bg: "bg-red-600",
        border: "border-red-300",
        hoverBg: "hover:bg-red-900",
        hoverBorder: "hover:border-red-50",
      },
      blue: {
        bg: "bg-blue-600",
        border: "border-blue-300",
        hoverBg: "hover:bg-blue-900",
        hoverBorder: "hover:border-blue-50",
      },
      green: {
        bg: "bg-green-600",
        border: "border-green-300",
        hoverBg: "hover:bg-green-900",
        hoverBorder: "hover:border-green-50",
      },
      purple: {
        bg: "bg-purple-600",
        border: "border-purple-300",
        hoverBg: "hover:bg-purple-900",
        hoverBorder: "hover:border-purple-50",
      },
      yellow: {
        bg: "bg-yellow-600",
        border: "border-yellow-300",
        hoverBg: "hover:bg-yellow-900",
        hoverBorder: "hover:border-yellow-50",
      },
      pink: {
        bg: "bg-pink-600",
        border: "border-pink-300",
        hoverBg: "hover:bg-pink-900",
        hoverBorder: "hover:border-pink-50",
      },
      orange: {
        bg: "bg-orange-600",
        border: "border-orange-300",
        hoverBg: "hover:bg-orange-900",
        hoverBorder: "hover:border-orange-50",
      },
      teal: {
        bg: "bg-teal-600",
        border: "border-teal-300",
        hoverBg: "hover:bg-teal-900",
        hoverBorder: "hover:border-teal-50",
      },
    };
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
    colors.bg, // Background color
    colors.border, // Border color
    "border-2",
    colors.hoverBg, // Hover background color
    "hover:shadow-2xl",
    colors.hoverBorder, // Hover border color
    "rounded-3xl text-2xl font-medium"
  );

  console.log(buttonClass);

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
