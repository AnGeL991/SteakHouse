import { FC, ReactNode } from 'react';
import './styles.scss';

interface IEachContact {
  title: string;
  children: ReactNode;
  action: { path: string; text: string };
}

export const EachContact: FC<IEachContact> = ({ title, children, action }) => {
  return (
    <div className="eachContact">
      <h3 className="eachContact__title">{title}</h3>
      <div className="eachContact__description">{children}</div>
      <a href={action.path} className="eachContact__link">
        {action.text}
      </a>
    </div>
  );
};
