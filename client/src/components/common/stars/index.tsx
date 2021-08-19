import { FC } from "react";
import { Icons } from "components/common";
import "./styles.scss";

const { Star } = Icons;

interface IStars {
  star?: number;
}

export const Stars: FC<IStars> = ({ star = 0 }) => {
  const stars = [1, 2, 3, 4, 5].map((i) => (
    <span key={i}>
      {i <= star ? (
        <Star
          className="star star--active"
          name={`${i}`}
        >
          {i}stars
        </Star>
      ) : (
        <Star
          className="star"
          name={`${i}`}
         
        >
          {i} stars
        </Star>
      )}
    </span>
  ));

  return <div>{stars}</div>;
};
