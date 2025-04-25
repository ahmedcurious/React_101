import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

function Button({ buttonText, onClick, buttonColor }) {
  // const buttonClass = classNames(
  //     "px-9 py-4 shadow",
  //     `${buttonColor}`,
  //     "border-slate-300 border-2 hover:bg-slate-900 hover:shadow-2xl",
  //     "hover:border-slate-50 rounded-3xl text-2xl font-medium"

  // );

  const buttonClass = twMerge(
    "px-9 py-4 shadow",
    `bg-${buttonColor}-600`, // Dynamic background color
    `border-${buttonColor}-300`, // Dynamic border color
    "border-2",
    `hover:bg-${buttonColor}-900`, // Dynamic hover background color
    "hover:shadow-2xl",
    `hover:border-${buttonColor}-50`, // Dynamic hover border color
    "rounded-3xl text-2xl font-medium"
  );
  return (
    <button className={buttonClass} onClick={onClick}>
      {buttonText}
    </button>
  );
}

Button.PropTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  buttonColor: PropTypes.string,
};

export default Button;
