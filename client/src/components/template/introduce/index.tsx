import { FC } from "react";
import { PrimaryButton, Icons } from "components/common";
import { Banner } from "components/template";
import "./styles.scss";
const { Steak } = Icons;

export const Introduce: FC = () => {
  return (
    <section className="introduce">
      <div className="introduce__wrapper">
        <h3 className="introduce__subtitle">Witamy was w </h3>
        <h1 className="introduce__title">Steak House!</h1>
        <span className="introduce__icon">
          <Steak />
        </span>
        <p className="introduce__description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
          repellendus quo vel ipsam, quis dolorem mollitia enim ratione earum
          eligendi animi asperiores laudantium harum dicta amet et placeat
          fugiat veniam?
        </p>
        <PrimaryButton>Zarezerwuj stolik</PrimaryButton>
        <PrimaryButton>Stwórz zamówienie</PrimaryButton>
      </div>
      <div className="introduce__firstBaner">
        <Banner img="https://demo.farost.net/steakin/wp-content/uploads/2019/04/home1-about1.jpg" />
      </div>
      <div className="introduce__secoundBanner">
        <Banner img="https://demo.farost.net/steakin/wp-content/uploads/2019/04/home1-about2.jpg" />
      </div>
    </section>
  );
};
