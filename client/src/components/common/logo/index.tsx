import { FC } from "react";
import './styles.scss';

export const Logo: FC = () => {
  return (
    <img
      src="http://demo.farost.net/steakin/wp-content/themes/steakin/assets/images/logo-dark.png"
      alt="logo"
      className='logo'
    />
  );
};
