import { FC, ChangeEvent, Ref } from 'react';
import { Input, TextArea, SubmitButton } from 'components/common';
import './styles.scss';

interface IContactData {
  name: string;
  placeholder: string;
  value?: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  ref?: Ref<HTMLInputElement>;
}

const ContactFormData: Array<IContactData> = [
  {
    name: 'FirstName',
    placeholder: 'Imię',
  },
  {
    name: 'LastName',
    placeholder: 'Nazwisko',
  },
  {
    name: 'Email',
    placeholder: 'Email',
    type: 'email',
  },
  {
    name: 'Phone',
    placeholder: 'telefon',
  },
];

export const ContactForm: FC = () => {
  const inputs = ContactFormData.map((el) => (
    <p key={el.name} className="contactForm__field">
      <Input {...el} />
    </p>
  ));
  return (
    <form className="contactForm">
      <fieldset className="contactForm__fieldset">
        {inputs}
        <p className="contactForm__textArea">
          <TextArea name="message" placeholder="Wiadomość" rows={8} />
        </p>
        <p className="contactForm__submit">
          <SubmitButton>Wyślij wiadomość</SubmitButton>
        </p>
      </fieldset>
    </form>
  );
};
