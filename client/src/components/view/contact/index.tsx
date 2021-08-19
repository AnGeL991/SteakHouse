import { FC } from 'react';
import { CustomBanner, ContactContent } from 'components/template';

export const Contact: FC = () => {
  return (
    <section>
      <CustomBanner
        subtitle="Kontakt z nami"
        title="Zostaw coś po sobie"
        prevHistory="home"
        currentHistory="contact"
      />
      <ContactContent />
    </section>
  );
};
