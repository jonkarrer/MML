import { FC } from "react";

const Card: FC = ({ children }) => (
  <div className="grid gap-9 place-items-center py-7 rounded-xl lg:py-0 lg:gap-3 lg:h-28">
    {children}
  </div>
);

export default Card;
