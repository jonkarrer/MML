import { FC } from "react";
import { Github, Documentation } from "./Links";
import { useToggleContext } from "../../../Mobile";

export const Developers: FC = () => {
  const toggle = useToggleContext();
  return (
    <div>
      <span
        onClick={() =>
          toggle?.userSelection === "Developers"
            ? toggle.userDispatch("none")
            : toggle?.userDispatch("Developers")
        }
        className="grid grid-flow-col gap-3 w-max items-center"
      >
        <p className="text-white text-sm font-bold">Developers</p>
        <svg
          width="13"
          height="9"
          viewBox="0 0 13 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            toggle?.userSelection === "Developers" ? "transform rotate-180" : ""
          }`}
        >
          <path
            d="M6.38456 9L0.000563622 0L12.7686 0L6.38456 9Z"
            fill="white"
          />
        </svg>
      </span>

      <div
        className={`${
          toggle?.userSelection === "Developers" ? "grid" : "hidden"
        } gap-5 mt-5`}
      >
        <Documentation />
        <Github />
      </div>
    </div>
  );
};
