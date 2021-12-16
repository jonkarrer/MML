import { FC, useState } from "react";
import { Github, Documentation } from "./Links";

export const Developers: FC = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <span
        onClick={() => setToggle(!toggle)}
        className="grid grid-flow-col gap-3 w-max items-center"
      >
        <p className="text-white text-xs font-bold">DEVELOPERS</p>
        <svg
          width="13"
          height="9"
          viewBox="0 0 13 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${toggle ? "transform rotate-180" : ""}`}
        >
          <path
            d="M6.38456 9L0.000563622 0L12.7686 0L6.38456 9Z"
            fill="white"
          />
        </svg>
      </span>

      <div className={`${toggle ? "grid" : "hidden"} gap-5 mt-5`}>
        <Documentation />
        <Github />
      </div>
    </div>
  );
};
