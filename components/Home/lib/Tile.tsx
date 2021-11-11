import { ITile } from "@/utils/interfaces";

const Tile = ({ text, img }: ITile) => (
  <div className="grid place-items-center gap-7">
    <div className="h-26 w-26 rounded-3xl bg-powderblue grid place-content-center">
      <img className="h-9" src={img} alt="icon" />
    </div>
    <p className="text-x text-center w-26">{text}</p>
  </div>
);

export default Tile;
