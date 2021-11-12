import Item from "./Item";
import { Dash } from "../icons/index";

const Cards = () => {
  return (
    <div className="grid gap-8 place-items-center md:w-96 md:m-auto lg:flex lg:gap-0 lg:w-auto lg:flex-1 lg:justify-end">
      <div className="bg-00DCCF w-full rounded-xl lg:bg-opacity-0 h-full lg:w-auto">
        <Item>
          <Dash />
          <p className="w-24 text-sm lg:text-xr font-bold text-center text-white lg:text-opacity-60 lg:self-end">
            Use the Dashboard
          </p>
        </Item>
      </div>

      <Item>
        <img className="lg:w-14" src="/icons/python.svg" alt="python icon" />{" "}
        <p className="w-24 text-sm lg:text-xr font-bold text-center text-white text-opacity-60 lg:self-end">
          Start Developing
        </p>
      </Item>

      <Item>
        <img className="lg:w-14" src="/icons/discord.svg" alt="discord icon" />{" "}
        <p className="w-24 text-sm lg:text-xr font-bold text-center text-white text-opacity-60 lg:self-end">
          Join the community
        </p>
      </Item>
    </div>
  );
};

export default Cards;
