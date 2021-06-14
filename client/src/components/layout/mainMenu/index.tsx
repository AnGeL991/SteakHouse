import { FC } from "react";
import { Bars, EachLink, DropDownLinks, Logo } from "components/common";
import { useToggleClick } from "_hooks";
import { sublinks } from "db";
import "./styles.scss";


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
            className={`navbar__dropDown ${open && "navbar__dropDown--active"}`}
          >
            <ul className="navbar__list">
              <EachLink text="home" path="/" />
              <EachLink text="Blog" path="/blog" />
              <DropDownLinks text="Menu" {...{ sublinks }} />
              <EachLink text="Contact" path="/contact" />
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
};
