import { FC } from "react";
import { Icons } from "components/common";
import "./styles.scss";
const { Search } = Icons;

interface ISpecialDish {
  _id?: string;
  title: string;
  price: number;
  image: string;
  ingredients: Array<string>;
}

export const SpecialDish: FC<ISpecialDish> = ({
  _id,
  title,
  price,
  image,
  ingredients,
}) => {
  const specialDishIngredient = ingredients.map((el) => (
    <span key={el}>{el}, </span>
  ));

  return (
    <div className="specialDish">
      <div className="specialDish__imageBox">
        <div className="specialDish__background">
          <div className="specialDish__circle">
            <Search className="specialDish__icon" />
          </div>
        </div>
        <img src={image} alt={title} className="specialDish__img" />
      </div>
      <div className="specialDish__info">
        <div className='specialDish__mainInfo'>
          <h4 className="specialDish__title">{title}</h4>
          <span className="specialDish__price">${price.toFixed(2)}</span>
        </div>

        <span className="specialDish__border"></span>
        <div className="specialDish__ingredient">{specialDishIngredient}</div>
      </div>
    </div>
  );
};
