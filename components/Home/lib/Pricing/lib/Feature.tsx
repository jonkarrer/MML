import { FC } from "react";

export const Feature: FC<{ name: string }> = ({ name }) => (
  <span className="flex items-center space-x-3">
    <div className=" bg-EFF8FE rounded-full w-5 h-5 dark:bg-121212">
      <img src="/icons/check.svg" alt="check mark" />{" "}
    </div>
    <p className="text-15 text-232333 dark:text-white">{name}</p>
  </span>
);
