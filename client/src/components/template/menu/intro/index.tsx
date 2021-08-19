import { FC } from "react";
import { UniqueIcon } from "components/common";

export const Intro: FC = () => {
  return (
    <article className="menu__intro">
      <h3 className="menu__subtitle">Swieze, Szybkie, Posiłki</h3>
      <h1 className="menu__title">Poznaj nasze menu</h1>
      <UniqueIcon />
      <p className="menu__description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis maxime
        tempora quisquam sequi distinctio magni dolorem repellat, explicabo,
        minus, harum consequatur? Dolore nam exercitationem voluptates
        distinctio pariatur modi placeat quasi
      </p>
    </article>
  );
};
