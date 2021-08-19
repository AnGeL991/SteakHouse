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
      data-testid='test-bar'
    ></span>
  ));

  return (
    <button className="bars" onClick={handleToggle} data-testid='test-bars'>
      {bars}
    </button>
  );
};
