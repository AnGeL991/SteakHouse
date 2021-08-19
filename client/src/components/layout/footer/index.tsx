import { FC } from "react";
import { Media, About, Newsletter, CopyRight } from "components/layout";
import {SVG} from 'svg';
import "./styles.scss";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <img src={SVG.IconDark} alt='icon' className='footer__svg' />
      <Media />
      <About />
      <Newsletter />
      <CopyRight />
    </footer>
  );
};
