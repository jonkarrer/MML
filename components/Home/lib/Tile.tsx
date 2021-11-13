import { ITile } from "@/utils/interfaces";
import { FC } from "react";

const Tile: FC<ITile> = ({ children, text }) => (
  <div className="grid place-items-center gap-7">
    <div className="grid place-content-center h-26 w-26 rounded-3xl bg-EFF8FE dark:bg-282929">
      {children}
    </div>
    <p className=" text-xs font-medium text-center w-26 opacity-60 dark:text-white">
      {text}
    </p>
  </div>
);

export default Tile;
