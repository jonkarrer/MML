import { FC, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { Python, Dash, Discord } from "../icons";

const Cards: FC = () => (
  <div className="grid gap-3 place-items-center m-auto w-full md:w-96 lg:flex lg:gap-0 lg:w-full h-full">
    <Card
      image="Dash"
      text="Use the Dashboard"
      color="bg-00DCCF dark:bg-dk.25 lg:bg-white lg:dark:bg-121212 lg:hover:bg-00DCCF lg:dark:hover:bg-dk.25"
      link="/dashboard"
      textColor="dark:text-00DCCF"
    />

    <Card
      image="Python"
      text="Start Developing"
      color="bg-01C2FF dark:bg-dk.25 lg:bg-white lg:dark:bg-121212 lg:hover:bg-01C2FF lg:dark:hover:bg-dk.25"
      link="https://docs.marketmakerlite.com/"
      textColor="dark:text-0098FF"
    />

    <Card
      image="Discord"
      text="Join the community"
      color="bg-5F6CFF dark:bg-dk.25 lg:bg-white lg:dark:bg-121212 lg:hover:bg-5F6CFF lg:dark:hover:bg-dk.25"
      link="https://discord.gg/jjDcZcqXWy"
      textColor="dark:text-5653FF"
    />
  </div>
);

export default Cards;

interface ICard {
  image: string;
  text: string;
  color: string;
  link: string;
  textColor: string;
}

const Card = ({ image, text, color, link, textColor }: ICard) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(link)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`grid gap-9 place-content-center w-50 h-54 rounded-xl lg:gap-0 lg:h-full text-white lg:text-black dark:text-white lg:dark:text-lite lg:hover:text-white lg:flex-1 cursor-pointer hover:shadow-card ${color}`}
    >
      <div className="grid place-items-center gap-8 lg:h-36 lg:gap-0">
        {image === "Dash" ? (
          <Dash hover={hover} />
        ) : image === "Python" ? (
          <Python hover={hover} />
        ) : (
          <Discord hover={hover} />
        )}
        <p
          className={`${textColor} ${
            hover ? textColor : "lg:dark:text-lite"
          } w-24 text-sm lg:text-14 font-bold text-center lg:self-end hover:opacity-100`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};
