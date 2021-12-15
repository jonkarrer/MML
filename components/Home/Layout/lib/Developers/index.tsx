import { FC, useState } from "react";
import { Triangle, Documentation, Github } from "./Links";
import { useToggleContext } from "../../Desktop";

export const Developers: FC = () => {
  const toggle = useToggleContext();
  return (
    <div className="text-white text-xm lg:text-14 font-medium cursor-pointer relative">
      <p
        onClick={() =>
          toggle?.userSelection === "Developers"
            ? toggle.userDispatch("none")
            : toggle?.userDispatch("Developers")
        }
        className={`${
          toggle?.userSelection === "Developers" ? "opacity-60" : ""
        } hover:opacity-60`}
      >
        Developers
      </p>
      <div
        className={`${
          toggle?.userSelection === "Developers" ? "absolute" : "hidden"
        } bg-white dark:bg-121212 top-10 -left-5 w-59 h-26 p-6 flex flex-col justify-between rounded-base shadow-0,5,15,5,.25`}
      >
        <Documentation />
        <Github />
        <span className="absolute top-0 left-12 transform -translate-y-3/4">
          <Triangle />
        </span>
      </div>
    </div>
  );
};
