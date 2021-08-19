import { FC } from 'react';
import { MediaIcon } from 'components/common';
import './styles.scss';

export const FollowUs: FC = () => {
  return (
    <div className="fallowUs">
      <h3 className="fallowUs__title">Obserwuj nas</h3>
      <ul className='fallowUs__list'>
        <li className='fallowUs__eachMedia'>
          <MediaIcon facebook />
        </li>
        <li className='fallowUs__eachMedia'>
          <MediaIcon twitter />
        </li>
        <li className='fallowUs__eachMedia'>
          <MediaIcon pinterest />
        </li>
        <li className='fallowUs__eachMedia'>
          <MediaIcon linkedin />
        </li>
      </ul>
    </div>
  );
};
