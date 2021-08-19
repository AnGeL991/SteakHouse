import { FC } from "react";
import { EachNews } from "components/template";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";

export const News: FC = () => {
  const settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
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
    <section className="news">
      <div className="news__wrapper">
        <h3 className="news__subtitle">Badz na biezaco</h3>
        <h1 className="news__title">Ostatnie nowości & eventy</h1>
        <span className="news__uniqueIcon"></span>
        <div className="news__post">
          <Slider {...settings}>
            <EachNews />
            <EachNews />
            <EachNews />
            <EachNews />
          </Slider>
        </div>
      </div>
    </section>
  );
};
