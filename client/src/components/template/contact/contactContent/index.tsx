import { FC } from 'react';
import { ContactDetail, ContactForm } from 'components/template';
import './styles.scss'
export const ContactContent: FC = () => {
  return (
    <article className='contactContent'>
      <ContactDetail />
      <ContactForm />
    </article>
  );
};
