import { FC, ReactNode } from 'react';
import './styles.scss';

interface IButton {
  children: ReactNode;
  onClick?: () => void;
  width?: string;
  primary?: boolean;
  secondary?: boolean;
  secondaryFull?: boolean;
  light?: boolean;
  className?: string;
}

export const Button: FC<IButton> = ({
  children,
  onClick,
  width,
  primary,
  secondary,
  secondaryFull,
  light,
  className,
}) => {
  return (
    <button
      className={`
      ${primary && 'primaryButton'} 
      ${secondary && 'secondaryButton'} 
      ${secondaryFull && 'secondaryButton secondaryButton--full'} 
      ${light && 'lightButton'}
      ${className}`}
      {...{ onClick }}
      style={{ width }}
      data-testid="test-button"
    >
      {children}
    </button>
  );
};

export const BookButton: FC<IButton> = ({ children, onClick }) => {
  return (
    <button
      className="bookButton"
      {...{ onClick }}
      data-testid="test-bookButton"
    >
      {children}
    </button>
  );
};

export const SubmitButton: FC<IButton> = ({ children, onClick }) => {
  return (
    <button
      className="submitButton"
      {...{ onClick }}
      data-testid="test-submitButton"
    >
      {children}
    </button>
  );
};
