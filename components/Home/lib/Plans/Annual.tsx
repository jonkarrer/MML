import { FC } from "react";
import * as style from "./styles";

const Annual: FC = () => {
  return (
    <article className={`${style.cardContainer} py-9`}>
      <div className={style.wrapper}>
        <h3 className={style.title}>Annual</h3>

        <div className={style.content}>
          <p className={style.price}>
            <span className="font-bold">$399</span> per year
          </p>

          <ul className={style.benefits}>
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
