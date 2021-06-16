import { FC, ReactNode } from "react";
import "./styles.scss";

interface IButton {
  children: ReactNode;
  onClick?: () => void;
  width?: string;
}

export const PrimaryButton: FC<IButton> = ({ children, onClick, width }) => {
  return (
    <button className="primaryButton" {...{ onClick }} style={{ width }}>
      {children}
    </button>
  );
};

export const SecondaryButton: FC<IButton> = ({ children, onClick, width }) => {
  return (
    <button className="secondaryButton" {...{ onClick }} style={{ width }}>
      {children}
    </button>
  );
};
