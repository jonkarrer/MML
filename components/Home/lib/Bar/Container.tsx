import Card from "./Card";
import { Dash, Python, Discord } from "../icons/index";

const Container = () => {
  return (
    <div className="grid gap-8 place-items-center md:w-96 md:m-auto lg:flex lg:gap-0 lg:w-auto lg:flex-1 lg:justify-end">
      <div className="bg-00DCCF w-full h-full rounded-xl lg:bg-opacity-0 lg:w-auto">
        <Card>
          <Dash />
          <p className="w-24 text-sm lg:text-xr font-bold text-center text-white lg:text-black lg:dark:text-white lg:opacity-60 lg:self-end">
            Use the Dashboard
          </p>
        </Card>
      </div>

      <Card>
        <Python />
        <p className="w-24 text-sm lg:text-xr font-bold text-center text-black dark:text-white opacity-60 lg:self-end">
          Start Developing
        </p>
      </Card>

      <Card>
        <Discord />
        <p className="w-24 text-sm lg:text-xr font-bold text-center text-black dark:text-white opacity-60 lg:self-end">
          Join the community
        </p>
      </Card>
    </div>
  );
};

export default Container;
