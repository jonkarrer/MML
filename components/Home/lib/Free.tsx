import { FC } from "react";
import * as style from "./styles";

const Card: FC = () => {
  return (
    <article className={`${style.card} py-9`}>
      <div className={style.wrapper}>
        <h3 className={style.title}>Free</h3>

        <div className={style.content}>
          <p className={style.price}>
            <span className="font-bold">$0</span> per month
          </p>

          <ul className={style.benefits}>
            <li>Delayed charts</li>
            <li>Delayed alerts</li>
            <li>Discord community</li>
            <li>Open source models</li>
            <li>Sentiment tracking</li>
            <li>Financial literacy tools</li>
          </ul>
        </div>
        <button className="bg-FFEED0 dark:bg-FFD184">Get Started</button>
      </div>
    </article>
  );
};

export default Card;
