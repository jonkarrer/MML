import { FC } from "react";

const Card: FC = () => {
  return (
    <article className="plan py-11">
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
        <button className="bg-FFEED0 dark:bg-FFD184 relative hover:shadow-plan_button">
          Get Started
        </button>
      </div>
      <style jsx>
        {`
          button:hover::after {
            content: "›";
            font-size: 24px;
            font-weight: bold;

            position: absolute;
            top: 0;
            bottom: 0;
            right: 20px;
            margin: auto;

            height: 40px;
            width: 40px;
          }
        `}
      </style>
    </article>
  );
};

export default Card;
