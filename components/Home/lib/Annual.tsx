import { FC } from "react";

const Annual: FC = () => {
  return (
    <div className="grid place-content-center gap-9 py-9 text-center shadow-card rounded-lg">
      <h3>Annual</h3>
      <p className="text-xm">
        <span className="bold">$399</span> per month
      </p>
      <button className="bg-yellow">Get Started</button>
    </div>
  );
};

export default Annual;
