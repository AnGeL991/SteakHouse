import { FC } from "react";
import { Icons } from "components/common";
import { SVG } from "svg";
const { ArrowLongUp } = Icons;

export const CopyRight: FC = () => {
  return (
    <section className="footer__place">
      <div>
        <img
          src={SVG.IconScrollUp}
          alt="svgIcon"
          className="footer__svg footer__bottom"
        />
        <ArrowLongUp className="footer__icon" />
      </div>
      <p className="footer__description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus
      </p>
      <p className="footer__description">
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> 2021 Adrian
        Markuszewski
      </p>
    </section>
  );
};
