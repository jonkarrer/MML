import { FC } from "react";

const Card: FC = ({ children }) => {
  return (
    <div className="grid place-content-center gap-9 py-9 text-center shadow-card rounded-lg">
      <h3>Free</h3>
      <p className="text-xm">$0 per month</p>
      <button className="bg-yellow">Get Started</button>
    </div>
  );
};

export default Card;
