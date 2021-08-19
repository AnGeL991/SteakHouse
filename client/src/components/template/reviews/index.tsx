import { FC } from "react";
import { Review } from "components/template";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import { SVG } from "svg";

export const Reviews: FC = () => {
  const settings = {
    dots: true,
    speed: 1000,
    Infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="reviews">
       <img src={SVG.IconWhite} alt='icon' className='reviews__svg reviews__top' />
      <div className="reviews__background"></div>
      <article className="reviews__wrapper">
        <h3 className="reviews__subtitle">Referencje</h3>
        <h1 className="reviews__title">Szczęsliwi kupujący</h1>
        <span className="reviews__uniqeuIcon"></span>
        <div className='reviews__slider'>
          <Slider {...settings}>
            <Review />
            <Review />
            <Review />
          </Slider>
        </div>
      </article>
      <img src={SVG.IconWhite} alt='icon' className='reviews__svg reviews__bottom ' />
    </section>
  );
};
