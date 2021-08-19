import { FC } from "react";
import { SpecialDish } from "components/template";
import { UniqueIcon } from "components/common";
import { SVG } from "svg";
import "./styles.scss";


export const Special: FC = () => {
  return (
    <section className="special">
      <img
        src={SVG.IconWhite}
        alt="icon"
        className="special__svg special__top"
      />
      <div className="special__background"></div>
      <article className="special__wrapper">
        <span className="special__border"></span>
        <h3 className="special__subtitle">Pyszne przepisy</h3>
        <h1 className="special__title">Nasze wspaniałe dania</h1>
        <UniqueIcon />
        <div className="special__dishes">
          <SpecialDish
            title="Grilled American Fillet"
            price={39.9}
            image="https://demo.farost.net/steakin/wp-content/uploads/2019/04/menu1-400x400.jpg"
            ingredients={[
              "Pork",
              "Fillet",
              "ginger",
              "garlic",
              "honey",
              "pepper & canola oil",
              "crab dip",
              "creamy chesapeake",
            ]}
          />
             <SpecialDish
            title="Grilled American Fillet"
            price={39.9}
            image="https://demo.farost.net/steakin/wp-content/uploads/2019/04/menu1-400x400.jpg"
            ingredients={[
              "Pork",
              "Fillet",
              "ginger",
              "garlic",
              "honey",
              "pepper & canola oil",
              "crab dip",
              "creamy chesapeake",
            ]}
          />
             <SpecialDish
            title="Grilled American Fillet"
            price={39.9}
            image="https://demo.farost.net/steakin/wp-content/uploads/2019/04/menu1-400x400.jpg"
            ingredients={[
              "Pork",
              "Fillet",
              "ginger",
              "garlic",
              "honey",
              "pepper & canola oil",
              "crab dip",
              "creamy chesapeake",
            ]}
          />
             <SpecialDish
            title="Grilled American Fillet"
            price={39.9}
            image="https://demo.farost.net/steakin/wp-content/uploads/2019/04/menu1-400x400.jpg"
            ingredients={[
              "Pork",
              "Fillet",
              "ginger",
              "garlic",
              "honey",
              "pepper & canola oil",
              "crab dip",
              "creamy chesapeake",
            ]}
          />
        </div>
      </article>
      <img
        src={SVG.IconWhite}
        alt="icon"
        className="special__svg special__bottom"
      />
    </section>
  );
};
