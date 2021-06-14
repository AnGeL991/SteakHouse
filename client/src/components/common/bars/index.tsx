import { FC } from "react";
import "./styles.scss";

interface IBars {
  open: boolean;
  handleToggle: () => void;
}

export const Bars: FC<IBars> = ({ open, handleToggle }) => {
  const bars = [1, 2, 3].map((el) => (
    <span
      key={el}
      className={`bars__bar ${open && "bars__bar--active"}`}
    ></span>
  ));

  return (
    <button className="bars" onClick={handleToggle}>
      {bars}
    </button>
  );
};
