import { FC } from "react";

const Item: FC = ({ children }) => (
  <div className="grid gap-9 place-items-center py-7 rounded-xl lg:py-0 lg:gap-0 lg:h-28 lg:w-36 ">
    {children}
  </div>
);

export default Item;
