import { FC } from "react";

const Annual: FC = () => {
  return (
    <article className="plan py-11">
      <div className="wrapper">
        <h3 className="title">Annual</h3>

        <div className="content">
          <p className="price">
            <span className="font-bold">$399</span> per year
          </p>

          <ul className="benefits">
            <li>
              <i className="font-bold">All features, plus</i>
            </li>
            <li>15% savings</li>
            <li>Priority feature requests</li>
            <li>Support our development</li>
          </ul>
        </div>
        <button className="bg-D1CCFF dark:bg-8678FF relative hover:shadow-plan_button">
          Support {`&`} Save
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
            right: 5px;
            margin: auto;

            height: 40px;
            width: 40px;
          }
        `}
      </style>
    </article>
  );
};

export default Annual;
