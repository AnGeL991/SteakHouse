import { FC } from "react";
import { Media, About, Newsletter, CopyRight } from "components/layout";
import "./styles.scss";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <Media />
      <About />
      <Newsletter />
      <CopyRight />
    </footer>
  );
};
