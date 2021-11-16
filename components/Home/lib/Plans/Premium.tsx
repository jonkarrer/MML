import { FC } from "react";

const Premium: FC = () => {
  return (
    <article className="plan py-10 border-t-8 border-BFE5FF dark:border-6BC3FF md:relative">
      <div className="wrapper">
        <span
          className="
         text-ty font-bold w-44 
        bg-BFE5FF dark:bg-6BC3FF m-auto rounded 
        md:absolute md:top-4 md:left-0 md:right-0"
        >
          Try free for 7 days!
        </span>
        <h3 className="title">Premium</h3>

        <div className="content">
          <p className="price">
            <span className="font-bold">$39</span> per month
          </p>

          <ul className="benefits">
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
        <button className="bg-BFE5FF dark:bg-6BC3FF relative hover:shadow-plan_button">
          Subscribe
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
            right: 25px;
            margin: auto;

            height: 40px;
            width: 40px;
          }
        `}
      </style>
    </article>
  );
};

export default Premium;
