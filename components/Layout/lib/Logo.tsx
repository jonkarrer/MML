import Link from "next/link";
import { FC } from "react";

const Logo: FC = () => (
  <Link passHref href="/">
    <div
      className="
        grid place-content-center cursor-pointer 
        bg-white dark:bg-darkgrey 
        w-11 h-11 rounded-full 
        filter bg-opacity-30
        shadow-lg  dark:drop-shadow-logo"
    >
      <h6 className="text-ty font-bold" style={{ marginBottom: "2px" }}>
        mml
      </h6>
    </div>
  </Link>
);

export default Logo;
