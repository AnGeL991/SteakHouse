import { FC } from "react";

export const CopyRight: FC = () => {
  return (
    <section className="footer__place">
      <div>svg + icon</div>
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
