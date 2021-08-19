import { FC } from "react";
import { Button } from "components/common";
import "./styles.scss";

export const EachNews: FC = () => {
  return (
    <section className="eachNews">
      <div className="eachNews__time">
        october 12, 2018 /{" "}
        <span className="eachNews__post">Lemon Sauce Sweet</span>
      </div>
      <h4 className="eachNews__title">The Great Sauces Ever!</h4>
      <div className="eachNews__imageBox">
        <img
          src="https://demo.farost.net/steakin/wp-content/uploads/2018/10/blog3-680x496.jpg"
          alt="event Name"
          className="eachNews__img"
        />
      </div>
      <div className="eachNews__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nulla,
        soluta nemo non maxime ipsam beatae alias dolore odit illo sunt ea.
        Velit, et nobis. Ut corporis ea earum hic.
      </div>
      <div className="eachNews__buttons">
        <Button secondary className="eachNews__button">
          Read More
        </Button>
      </div>
    </section>
  );
};
