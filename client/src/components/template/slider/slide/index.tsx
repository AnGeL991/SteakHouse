import { FC, ReactNode } from "react";

import "./styles.scss";

interface ISlide {
  subtitle: string;
  title: string;
  description?:string;
  children?: ReactNode;
}

export const Slide: FC<ISlide> = ({ subtitle, title, children,description }) => {
  return (
    <div className="slide">
      <div className="slide__background"></div>
      <div className="slide__wrapper">
        <h3 className="slide__subtitle">{subtitle}</h3>
        <h1 className="slide__title">{title}</h1>
        <p className='slide__description'>{description}</p>
        {children}
      </div>
    </div>
  );
};
