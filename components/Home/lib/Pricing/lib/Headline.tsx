import { FC } from "react";

interface IHeadline {
  title: string;
  desc: string;
}

export const Headline: FC<IHeadline> = ({ title, desc }) => (
  <div className="grid gap-2.5">
    <h3 className="text-lg font-black">{title}</h3>
    <p className=" text-232333 opacity-50 text-14 dark:text-lt.50">{desc}</p>
  </div>
);
