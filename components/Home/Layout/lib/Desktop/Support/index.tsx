import { FC } from "react";
import { Start, About, Learn, Blog, Contact, Triangle } from "./Links";
import { useToggleContext } from "../../../Layout";

export const Support: FC = () => {
  const toggle = useToggleContext();
  return (
    <div className="text-white text-xm lg:text-14 font-medium cursor-pointer relative">
      <p
        onMouseEnter={() => toggle?.userDispatch("Support")}
        className={`${
          toggle?.userSelection === "Support" ? "opacity-60" : ""
        } hover:opacity-60`}
      >
        Support
      </p>
      <div
        className={`${
          toggle?.userSelection === "Support" ? "absolute" : "hidden"
        } bg-white dark:bg-121212 top-10 -left-8 w-59 h-60 p-6 flex flex-col justify-between rounded-base shadow-0,5,15,5,.25`}
      >
        <Start />
        <About />
        <Learn />
        <Blog />
        <Contact />
        <span className="absolute top-0 left-12 transform -translate-y-3/4">
          <Triangle />
        </span>
      </div>
    </div>
  );
};
