import { FC } from "react";

export const About: FC = () => {
  return (
    <section className="footer__section">
      <div>
        <img
          className="logo"
          src="https://demo.farost.net/steakin/wp-content/uploads/2018/10/logo-light.png"
          alt="logo"
        />
      </div>
      <p className="footer__description">
        Steak in jest najlepszym miejscem by zjeść wspaniałego steka napić się
        niesamowitych koktaili z idealnym serwisem, w komfortowej atmosferze
      </p>
    </section>
  );
};
