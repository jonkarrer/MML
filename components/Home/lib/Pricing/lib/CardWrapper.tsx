import { FC } from "react";

interface ICardWrapper {
  borderColor: string;
  shadow?: string;
}

export const CardWrapper: FC<ICardWrapper> = ({
  children,
  borderColor,
  shadow,
}) => (
  <article
    className={`border ${borderColor} ${shadow} flex flex-col justify-between pt-5 pb-6 rounded-base px-8 leading-none h-84 dark:border-none dark:bg-dk.25 dark:text-white max-w-100 m-auto`}
  >
    {children}
  </article>
);
