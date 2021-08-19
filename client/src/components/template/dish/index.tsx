import { FC } from "react";
import { Icons, UniqueIcon } from "components/common";
import { SVG } from "svg";
import "./styles.scss";
const { Search } = Icons;

interface IDish {
  _id?: string;
  title: string;
  price: number;
  image: string;
  ingredients: Array<string>;
}

export const Dish: FC<IDish> = ({ _id, title, price, image, ingredients }) => {
  const dishIngredient = ingredients.map((el) => <span key={el}>{el}, </span>);

  return (
    <div className="dish">
      <div className="dish__imageBox">
        <div className="dish__background">
          <div className="dish__circle">
            <Search className="dish__icon" />
          </div>
        </div>
        <img src={image} alt={title} className="dish__img" />
      </div>
      <div className="dish__info">
        <img src={SVG.IconWhite} alt='Icon' className='dish__svg' />
        <div className="dish__border"></div>
        <span className="dish__price">${price.toFixed(2)}</span>
        <h4 className="dish__title">{title}</h4>
        <UniqueIcon />
        <div className="dish__ingredient">{dishIngredient}</div>
      </div>
    </div>
  );
};
