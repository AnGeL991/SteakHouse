import { FC } from "react";
import Slider from "react-slick";
import { Slide } from "components/template";
import { Icons, Button } from "components/common";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import { SVG } from "svg";

const { ArrowLeft, ArrowRight, Axe } = Icons;

export const BannerSlider: FC = () => {
  const settings = {
    dots: true,
    speed: 500,
    Infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
  };

  const SlickArrowPrew = ({ onClick }: any) => {
    return (
      <div {...{ onClick }} className="arrow arrow__left">
        <ArrowLeft />
      </div>
    );
  };
  const SlickArrowNext = ({ onClick }: any) => {
    return (
      <div {...{ onClick }} className="arrow arrow__right">
        <ArrowRight />
      </div>
    );
  };

  return (
    <section className="mainBanner">
      <img
        src={SVG.IconWhiteSlider}
        alt="svgSlider"
        className="mainBanner__svg mainBanner__left"
      />
      <Slider
        {...settings}
        prevArrow={<SlickArrowPrew />}
        nextArrow={<SlickArrowNext />}
      >
        <Slide
          subtitle="Witamy W Steak House"
          title="Tworzymy Wspaniałe Jedzenie!"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus autem
          dignissimos ratione ipsum nemo soluta laborum "
        >
          <Button light>Book your table now</Button>
          
        </Slide>
        <Slide
          subtitle="Steak House Offeruje ci"
          title="Świeże, Pyszne posiłki"
        >
          <Button secondaryFull width="70%">
            Zobacz menu
          </Button>
          <Button light width="70%">
            Zarezerwuj stolik
          </Button>
        </Slide>
        <Slide
          subtitle="Kreatywni i utalentowani kucharze"
          title="Wyjątkowe jedzenie wybrane z myślą o was"
        >
          <Axe className="axeIcon" />
        </Slide>
      </Slider>
      <img
        src={SVG.IconWhiteSlider}
        alt="svgSlider"
        className="mainBanner__svg mainBanner__right"
      />
    </section>
  );
};
