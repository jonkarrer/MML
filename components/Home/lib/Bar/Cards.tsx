import { Dash, Python, Discord } from "../icons/index";
import { FC } from "react";

const Cards = () => {
  return (
    <div className="grid gap-8 place-items-center m-auto w-full md:w-96 lg:flex lg:gap-0 lg:w-full h-full">
      <Card text="Use the Dashboard">
        <Dash />
      </Card>

      <Card text="Start Developing">
        <Python />
      </Card>

      <Card text="Join the community">
        <Discord />
      </Card>
    </div>
  );
};

export default Cards;

interface ICard {
  text: string;
}

const Card: FC<ICard> = ({ children, text }) => (
  <div className="grid gap-9 place-content-center py-7 rounded-xl lg:py-0 lg:gap-0 lg:h-full lg:flex-1">
    <div className="grid place-items-center gap-8 lg:h-36 lg:gap-0">
      {children}{" "}
      <p className="w-24 text-sm lg:text-ty font-bold text-center text-black dark:text-white opacity-60 lg:self-end">
        {text}
      </p>
    </div>
  </div>
);
