import { FC } from 'react';
import {
  Bars,
  EachLink,
  Logo,
  BookButton,
  Icons,
} from 'components/common';
import { useToggleClick } from '_hooks';
import './styles.scss';
const { Search, ShopingCart, Account } = Icons;

export const MainMenu: FC = () => {
  const { open, handleToggle } = useToggleClick();
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__wrapper">
          <a className="navbar-logo" href="/">
            <Logo />
          </a>
          <Bars {...{ open, handleToggle }} />
          <nav
            className={`navbar__dropDown ${open && 'navbar__dropDown--active'}`}
          >
            <div className="navbar__nav">
              <ul className="navbar__list">
                <EachLink text="home" path="/" />
                <EachLink text="Blog" path="/blog" />
                <EachLink text="Menu" path="/menu" />
                <EachLink text="Contact" path="/contact" />
              </ul>
              <BookButton>Zarezerwuj stolik</BookButton>
            </div>
            <div className="navbar__iconBox">
              <Search className="navbar__icon" />
              <ShopingCart className="navbar__icon" />
              <Account className="navbar__icon" />
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
};
