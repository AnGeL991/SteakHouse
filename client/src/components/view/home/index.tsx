import { FC } from "react";
import {
  Introduce,
  Special,
  Menu,
  Reviews,
  News,
  BannerSlider
} from "components/template";
export const Home: FC = () => {
  return (
    <section id='home'>
      <BannerSlider/>
      <Introduce />
      <Special />
      <Menu />
      <Reviews />
      <News />
    </section>
  );
};
