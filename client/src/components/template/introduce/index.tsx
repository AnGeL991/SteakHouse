import { FC } from "react";
import { Button, UniqueIcon } from "components/common";
import { Banner } from "components/template";
import "./styles.scss";

export const Introduce: FC = () => {
  return (
    <section className="introduce">
      <div className="introduce__wrapper">
        <h3 className="introduce__subtitle">Witamy was w </h3>
        <h1 className="introduce__title">Steak House!</h1>
        <UniqueIcon />
        <p className="introduce__description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
          repellendus quo vel ipsam, quis dolorem mollitia enim ratione earum
          eligendi animi asperiores laudantium harum dicta amet et placeat
          fugiat veniam?
        </p>
        <div className="introduce__buttons">
          <Button primary width="100%" className="introduce__button">
            Zarezerwuj stolik
          </Button>
          <Button primary width="100%" className="introduce__button">
            Stwórz zamówienie
          </Button>
        </div>
      </div>
      <div className="introduce__banners">
        <Banner img="https://demo.farost.net/steakin/wp-content/uploads/2019/04/home1-about1.jpg" />
        <Banner img="https://demo.farost.net/steakin/wp-content/uploads/2019/04/home1-about2.jpg" />
      </div>
    </section>
  );
};
