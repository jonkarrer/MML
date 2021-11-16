import { FC, useState } from "react";

const Cards = () => {
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
      className={`grid gap-9 place-content-center py-7 rounded-xl lg:py-0 lg:gap-0 lg:h-full text-dark dark:text-lite lg:flex-1 cursor-pointer hover:shadow-card hover:text-white ${color}`}
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

interface ISVG {
  hover: boolean;
}

const Dash = ({ hover }: ISVG) => (
  <svg
    className={`fill-current ${
      hover ? "text-white" : "text-B9B9B9 dark:text-white dark:opacity-60"
    }`}
    width="80"
    height="70"
    viewBox="0 0 80 75"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M69.8588 49.9998V12.4998H9.97982V49.9998H69.8588ZM69.8588 6.24979C71.6234 6.24979 73.3157 6.90827 74.5634 8.08037C75.8111 9.25247 76.5121 10.8422 76.5121 12.4998V49.9998C76.5121 51.6574 75.8111 53.2471 74.5634 54.4192C73.3157 55.5913 71.6234 56.2498 69.8588 56.2498H46.5726V62.4998H53.2258V68.7498H26.6129V62.4998H33.2661V56.2498H9.97982C6.28728 56.2498 3.3266 53.4373 3.3266 49.9998V12.4998C3.3266 9.03104 6.28728 6.24979 9.97982 6.24979H69.8588ZM16.633 18.7498H46.5726V34.3748H16.633V18.7498ZM49.8992 18.7498H63.2056V24.9998H49.8992V18.7498ZM63.2056 28.1248V43.7498H49.8992V28.1248H63.2056ZM16.633 37.4998H29.9395V43.7498H16.633V37.4998ZM33.2661 37.4998H46.5726V43.7498H33.2661V37.4998Z" />
  </svg>
);

const Python = ({ hover }: ISVG) => (
  <svg
    width="71"
    height="68"
    viewBox="0 0 65 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32.2657 0C15.7647 1.12885e-06 16.7951 6.8613 16.7951 6.8613L16.8135 13.9695H32.56V16.1038H10.559C10.559 16.1038 0 14.9556 0 30.92C-1.17731e-06 46.8843 9.21614 46.3182 9.21614 46.3182H14.7164V38.9101C14.7164 38.9101 14.4199 30.0733 23.7854 30.0733C33.1508 30.0733 39.4031 30.0733 39.4031 30.0733C39.4031 30.0733 48.1778 30.2093 48.1778 21.9421C48.1778 13.6748 48.1778 8.27237 48.1778 8.27237C48.1778 8.27237 49.51 0 32.2657 0ZM23.583 4.77998C25.1497 4.77998 26.4159 5.9941 26.4159 7.49628C26.4159 8.99846 25.1497 10.2126 23.583 10.2126C22.0164 10.2126 20.7501 8.99846 20.7501 7.49628C20.7501 5.9941 22.0164 4.77998 23.583 4.77998Z"
      className={`fill-current ${
        hover ? "text-white" : "text-B9B9B9 dark:text-white dark:opacity-40"
      }`}
    />
    <path
      d="M32.7343 62C49.2353 62 48.2049 55.1387 48.2049 55.1387L48.1865 48.0304H32.44V45.8962H54.441C54.441 45.8962 65 47.0444 65 31.08C65 15.1156 55.7838 15.6818 55.7838 15.6818H50.2836V23.0899C50.2836 23.0899 50.5801 31.9267 41.2146 31.9267C31.8492 31.9267 25.5968 31.9267 25.5968 31.9267C25.5968 31.9267 16.8222 31.7907 16.8222 40.0579C16.8222 48.3252 16.8222 53.7276 16.8222 53.7276C16.8222 53.7276 15.49 62 32.7343 62ZM41.417 57.22C39.8503 57.22 38.5841 56.0059 38.5841 54.5037C38.5841 53.0015 39.8503 51.7874 41.417 51.7874C42.9836 51.7874 44.2499 53.0015 44.2499 54.5037C44.2499 56.0059 42.9836 57.22 41.417 57.22Z"
      className={`fill-current ${
        hover ? "text-white" : "text-DBDBDB dark:text-white dark:opacity-60"
      }`}
    />
  </svg>
);

const Discord = ({ hover }: ISVG) => (
  <svg
    className={`fill-current ${
      hover ? "text-white" : "text-B9B9B9 dark:text-white dark:opacity-60"
    }`}
    width="67"
    height="43"
    viewBox="0 0 61 39"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M52.6506 4.87709C52.6506 4.87709 46.3028 0.502793 38.7922 0L38.125 1.18994C44.9113 2.64804 48.0184 4.74302 51.2781 7.30726C45.6737 4.7933 40.1266 2.43017 30.4809 2.43017C20.8353 2.43017 15.2881 4.7933 9.68375 7.30726C12.9434 4.74302 16.6416 2.41341 22.8369 1.18994L22.1697 0C14.2969 0.653631 8.31125 4.87709 8.31125 4.87709C8.31125 4.87709 1.22 13.9274 0 31.6927C7.14844 38.9497 18.0141 39 18.0141 39L20.2825 36.3352C16.4319 35.162 12.0666 33.0503 8.31125 29.2458C12.7909 32.2291 19.5772 35.3464 30.5 35.3464C41.4228 35.3464 48.19 32.2458 52.6888 29.2458C48.9334 33.0503 44.5681 35.162 40.7175 36.3352L42.9859 39C42.9859 39 53.8516 38.9497 61 31.6927C59.7419 13.9274 52.6506 4.87709 52.6506 4.87709ZM21.4453 26.8156C18.7575 26.8156 16.5844 24.6369 16.5844 21.9385C16.5844 19.2402 18.7575 17.0615 21.4453 17.0615C24.1331 17.0615 26.3062 19.2402 26.3062 21.9385C26.3062 24.6369 24.1331 26.8156 21.4453 26.8156ZM39.4784 26.8156C36.7906 26.8156 34.6175 24.6369 34.6175 21.9385C34.6175 19.2402 36.7906 17.0615 39.4784 17.0615C42.1662 17.0615 44.3394 19.2402 44.3394 21.9385C44.3394 24.6369 42.1472 26.8156 39.4784 26.8156Z" />
  </svg>
);
