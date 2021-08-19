import { FC } from "react";
import { Intro, Category,Dishes } from "components/template";
import "./styles.scss";

export const Menu: FC = () => {
  return (
    <section className="menu">
      <Intro />
      <Category />
      <Dishes/>
    </section>
  );
};
