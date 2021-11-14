import { FC } from "react";

const Card: FC = () => {
  return (
    <article className="plan py-9">
      <div className="wrapper">
        <h3 className="title">Free</h3>

        <div className="content">
          <p className="price">
            <span className="font-bold">$0</span> per month
          </p>

          <ul className="benefits">
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
