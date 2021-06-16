import { FC } from "react";

export const Newsletter: FC = () => {
  return (
    <section className="footer__section">
      <h2 className="footer__title">Newsletter</h2>
      <div className="footer__field">
        <input
          type="text"
          placeholder="Subscribe Our Newsletter"
          className="footer__input"
        />
        <input type="submit" className="footer__join" value="JOIN" />
      </div>
    </section>
  );
};
