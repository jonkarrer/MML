import { FC, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { Python, Dash, Discord } from "../icons";

const Cards: FC = () => (
  <div className="grid gap-8 place-items-center m-auto w-full md:w-96 lg:flex lg:gap-0 lg:w-full h-full">
    <Card
      image="Dash"
      text="Use the Dashboard"
      color="hover:bg-00DCCF"
      link="/dashboard"
    />

    <Card
      image="Python"
      text="Start Developing"
      color="hover:bg-01C2FF"
      link="https://docs.marketmakerlite.com/"
    />

    <Card
      image="Discord"
      text="Join the community"
      color="hover:bg-5F6CFF"
      link="https://discord.gg/jjDcZcqXWy"
    />
  </div>
);

export default Cards;

interface ICard {
  image: string;
  text: string;
  color: string;
  link: string;
}

const Card = ({ image, text, color, link }: ICard) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(link)}
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
