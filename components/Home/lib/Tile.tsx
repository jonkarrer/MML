import { ITile } from "@/utils/interfaces";
import { FC } from "react";

const Tile: FC<ITile> = ({ children, text }) => (
  <div className="grid place-items-center gap-7">
    <div className="grid place-content-center h-26 w-26 rounded-3xl bg-powderblue dark:bg-darkgrey">
      {children}
    </div>
    <p className="text-x text-center w-26 opacity-60 dark:text-white">{text}</p>
  </div>
);

export default Tile;
