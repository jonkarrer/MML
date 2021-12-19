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
    className={`
    border ${borderColor} ${shadow} rounded-base 
    flex flex-col justify-between
    pt-5 pb-6 px-8 max-w-100 m-auto h-100 lg:h-130
    leading-none
    dark:border-none dark:bg-dk.25 dark:text-white `}
  >
    {children}
  </article>
);
