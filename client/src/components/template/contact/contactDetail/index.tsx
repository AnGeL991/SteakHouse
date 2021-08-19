import { FC } from 'react';
import { EachContact, FollowUs, ContactInfo } from 'components/template';
import './styles.scss';

export const ContactDetail: FC = () => {
  return (
    <article className="contactDetails">
      <ContactInfo />
      <div className="contactDetails__detail">
        <EachContact
          title="Nasz Adres"
          action={{ path: '#', text: 'Znajdz nas' }}
        >
          <p>Zwirki i wigury 2, Warszawa, Polska</p>
        </EachContact>
      </div>
      <div className="contactDetails__detail">
        <EachContact
          title="Nasz Telefon"
          action={{ path: '#', text: 'Znajdz nas' }}
        >
          <p className="eachContact__info">Stacjonarny: 22 031 321 321</p>
          <p className="eachContact__info">Komórkowy: 521 512 213</p>
        </EachContact>
      </div>
      <div className="contactDetails__detail">
        <EachContact
          title="Nasz email"
          action={{ path: '#', text: 'Znajdz nas' }}
        >
          <p className="eachContact__info">Główny Email: support@test.pl</p>
          <p className="eachContact__info">Informacje: Info@text.pl</p>
        </EachContact>
      </div>
      <div className="contactDetails__detail">
        <FollowUs />
      </div>
    </article>
  );
};
