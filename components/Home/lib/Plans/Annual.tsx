import { FC } from "react";

const Annual: FC = () => {
  return (
    <article className="plan py-9">
      <div className="wrapper">
        <h3 className="title">Annual</h3>

        <div className="content">
          <p className="price">
            <span className="font-bold">$399</span> per year
          </p>

          <ul className="benefits">
            <li>
              <i className="font-bold">All free features, plus</i>
            </li>
            <li>15% savings</li>
            <li>Priority feature requests</li>
            <li>Support our development</li>
          </ul>
        </div>
        <button className="bg-D1CCFF dark:bg-8678FF">Support {`&`} Save</button>
      </div>
    </article>
  );
};

export default Annual;
