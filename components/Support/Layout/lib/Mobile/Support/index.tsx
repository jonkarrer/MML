import { FC, useState } from "react";
import { Start, About, Learn, Blog, Contact } from "./Links";
import { useToggleContext } from "../../../Mobile";

export const Support: FC = () => {
  const toggle = useToggleContext();
  return (
    <div>
      <span
        onClick={() =>
          toggle?.userSelection === "Support"
            ? toggle.userDispatch("none")
            : toggle?.userDispatch("Support")
        }
        className="grid grid-flow-col gap-3 w-max items-center"
      >
        <p className="text-232333 dark:text-white text-sm font-bold">Support</p>
        <svg
          width="13"
          height="9"
          viewBox="0 0 13 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            toggle?.userSelection === "Support" ? "transform rotate-180" : ""
          }`}
        >
          <path
            d="M6.38456 9L0.000563622 0L12.7686 0L6.38456 9Z"
            className="fill-current text-232333 dark:text-white"
          />
        </svg>
      </span>

      <div
        className={`${
          toggle?.userSelection === "Support" ? "grid" : "hidden"
        } gap-5 mt-5`}
      >
        <Start />
        <About />
        <Learn />
        <Blog />
        <Contact />
      </div>
    </div>
  );
};
