import { FC } from "react";

const Premium: FC = () => {
  return (
    <div className="grid place-content-center gap-9 py-9 text-center shadow-card rounded-lg">
      <h3>Premium</h3>
      <p className="text-xm">$0 per month</p>
      <button className="bg-blue_200">Get Started</button>
    </div>
  );
};

export default Premium;
