import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onclick: () => void;
  classname?: string;
}

const Button = ({ children, onclick, classname = "" }: ButtonProps) => {
  const defaultClasses = "bg-Primary-Red text-Background-Neutral hover:bg-Warm-Accent hover:text-Dark-Accent text-sm md:text-md lg:text-lg px-2 lg:px-3 py-1 lg:py-2 rounded-md font-semibold transition-all duration-300 cursor-pointer";
  const combinedClasses = `${defaultClasses} ${classname}`;

  return (
    <button onClick={onclick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
