import { FC, ReactNode } from 'react';
import { SVG } from 'svg';
import './styles.scss';

interface ICustomBanner {
  subtitle: string;
  title: string;
  description?: string;
  children?: ReactNode;
  prevHistory?: string;
  currentHistory?: string;
}

export const CustomBanner: FC<ICustomBanner> = ({
  subtitle,
  title,
  children,
  description,
  prevHistory,
  currentHistory,
}) => {
  return (
    <div className="customBanner">
      <div className="customBanner__background"></div>
      <div className="customBanner__wrapper">
        <h3 className="customBanner__subtitle">{subtitle}</h3>
        <h1 className="customBanner__title">{title}</h1>
        <p className="customBanner__description">{description}</p>
        {children}
        <p className="customBanner__history">
        <span className="customBanner__prev"> {prevHistory}</span> /
          <span className="customBanner__current">{currentHistory}</span>
        </p>
      </div>
      <img src={SVG.IconWhite} alt="svg" className="customBanner__svg" />
    </div>
  );
};
