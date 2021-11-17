import { FC, useState } from "react";
import { Python, Dash, Discord } from "../icons";
const Cards: FC = () => {
  return (
    <div className="grid gap-8 place-items-center m-auto w-full md:w-96 lg:flex lg:gap-0 lg:w-full h-full">
      <Card image="Dash" text="Use the Dashboard" color="hover:bg-00DCCF" />

      <Card image="Python" text="Start Developing" color="hover:bg-01C2FF" />

      <Card image="Discord" text="Join the community" color="hover:bg-5F6CFF" />
    </div>
  );
};

export default Cards;

interface ICard {
  image: string;
  text: string;
  color: string;
}

const Card = ({ image, text, color }: ICard) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`grid gap-9 place-content-center w-full py-7 rounded-xl lg:py-0 lg:gap-0 lg:h-full text-dark dark:text-lite lg:flex-1 cursor-pointer hover:shadow-card hover:text-white ${color}`}
    >
      <div className="grid place-items-center gap-8 lg:h-36 lg:gap-0">
        {image === "Dash" ? (
          <Dash hover={hover} />
        ) : image === "Python" ? (
          <Python hover={hover} />
        ) : (
          <Discord hover={hover} />
        )}
        <p className="w-24 text-sm lg:text-ty font-bold text-center lg:self-end hover:opacity-100">
          {text}
        </p>
      </div>
    </div>
  );
};
