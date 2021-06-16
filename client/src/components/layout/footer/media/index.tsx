import { FC } from "react";
import {Icons} from 'components/common';
const {Facebook,Twitter,Linkedin,Pinterest} = Icons;
export const Media: FC = () => {
  return (
    <section className='footer__section'>
      <h2 className="footer__title">Follow us</h2>
      <ul className="footer__list">
        <li>
          <button className="footer__media"><Facebook/></button>
        </li>
        <li>
          <button className="footer__media"><Twitter/></button>
        </li>
        <li>
          <button className="footer__media"><Linkedin/></button>
        </li>
        <li>
          <button className="footer__media"><Pinterest/></button>
        </li>
      </ul>
    </section>
  );
};
