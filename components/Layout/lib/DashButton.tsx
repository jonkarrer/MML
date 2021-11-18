import { FC } from "react";

const DashButton: FC = () => (
  <a href="/dashboard">
    <span className="w-24 h-9 grid place-content-center bg-white rounded-full bg-opacity-20 hover:bg-opacity-40 cursor-pointer">
      <h6 className="opacity-80 dark:text-white text-ty font-bold">
        Dashboard
      </h6>
    </span>
  </a>
);

export default DashButton;
