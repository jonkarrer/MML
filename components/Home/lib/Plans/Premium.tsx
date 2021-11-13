import { FC } from "react";
import * as style from "./styles";

const Premium: FC = () => {
  return (
    <article
      className={`${style.cardContainer} py-8 border-t-8 border-BFE5FF dark:border-6BC3FF md:relative`}
    >
      <div className={style.wrapper}>
        <span
          className="
        text-x font-bold w-32 
        bg-BFE5FF dark:bg-6BC3FF m-auto rounded 
        md:absolute md:top-3 md:left-0 md:right-0"
        >
          Try free for 7 days!
        </span>
        <h3 className={style.title}>Premium</h3>

        <div className={style.content}>
          <p className={style.price}>
            <span className="font-bold">$39</span> per month
          </p>

          <ul className={style.benefits}>
            <li>
              <i className="font-bold">All free features, plus</i>
            </li>
            <li>Real time charts</li>
            <li>Instant alerts</li>
            <li>Exclusive Discord</li>
            <li>Options support</li>
            <li>Proprietary models</li>
            <li>Curated news feed</li>
            <li>Portfolio tracking</li>
            <li>Earn rewards</li>
          </ul>
        </div>
        <button className="bg-BFE5FF dark:bg-6BC3FF">Subscribe</button>
      </div>
    </article>
  );
};

export default Premium;
