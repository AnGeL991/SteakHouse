import { FC } from "react";
import { Link } from "react-router-dom";
import { Icons } from "components/common";
import "./styles.scss";
import { useToggleClick } from "_hooks";

interface IEachLink {
  text: string;
  path: string;
}

interface IDropDownLink {
  text: string;
  sublinks: Array<{ text: string; path: string }>;
}

export const EachLink: FC<IEachLink> = ({ text, path }) => {
  return (
    <li className="link">
      <Link to={path}>{text}</Link>
    </li>
  );
};

export const DropDownLinks: FC<IDropDownLink> = ({ text, sublinks }) => {
  const { ArrowDown, ArrowUp } = Icons;
  const { open, handleToggle } = useToggleClick();
  const height = sublinks.length * 46;

  const links = sublinks.map((el) => (
    <li className="link" key={el.text}>
      <Link to={el.path}>{el.text}</Link>
    </li>
  ));

  const arrow = open ? (
    <ArrowUp className="subList__icon" />
  ) : (
    <ArrowDown className="subList__icon" />
  );

  return (
    <li onClick={handleToggle} className='link link--active'>
      <div className="subList__toggler">
        <p >{text}</p>
        {arrow}
      </div>
      <ul
        className={`subList ${open && "subList--active"}`}
        style={ {height: ` ${open ? height+'px':'0px'}` }}
      >
        {links}
      </ul>
    </li>
  );
};
