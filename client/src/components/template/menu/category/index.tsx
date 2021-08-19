import { FC } from "react";

const category = [
  "wszystko",
  "śniadania",
  "desery",
  "Dania głowne",
  "Napoje",
  "Lunch",
];

export const Category: FC = () => {
  const categories = category.map((el) => (
    <li key={el} className="menu__eachCategory">
      {el}
    </li>
  ));

  return (
    <article className="menu__category">
      <ul className="menu__list">{categories}</ul>
    </article>
  );
};
