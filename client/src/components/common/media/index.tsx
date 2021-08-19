import { FC } from 'react';
import { Icons } from 'components/common';
import './styles.scss';
const { Facebook, Twitter, Pinterest, Linkedin } = Icons;

interface IMediaIcon {
  facebook?: boolean;
  twitter?: boolean;
  pinterest?: boolean;
  linkedin?: boolean;
}

export const MediaIcon: FC<IMediaIcon> = ({
  facebook,
  twitter,
  pinterest,
  linkedin,
}) => {
  const icon =
    (facebook && <Facebook />) ||
    (twitter && <Twitter />) ||
    (pinterest && <Pinterest />) ||
    (linkedin && <Linkedin />);
  return <button className="mediaIcon">{icon}</button>;
};
