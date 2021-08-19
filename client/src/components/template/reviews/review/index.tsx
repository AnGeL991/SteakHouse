import { FC } from "react";
import { Stars } from "components/common";
import {SVG} from 'svg';
import "./styles.scss";

export const Review: FC = () => {
  return (
    <div className="review">
      <div className="review__border"></div>
      <div className='review__stars'><Stars star={5}/></div>
      <div className="review__content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
        incidunt quis quaerat a, expedita adipisci, animi corporis unde autem
        nesciunt aliquid sequi
      </div>
      <div className="review__imageBox">
        <img className="review__img" src="https://demo.farost.net/steakin/wp-content/uploads/2018/10/testimonial1.jpg" alt="customer" />
      </div>
      <h4 className="review__name">Adrian Markuszewski</h4>
      <img src={SVG.IconWhite} alt='icon'  className='review__svg' />
    </div>
  );
};
