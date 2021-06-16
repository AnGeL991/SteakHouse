import { FC } from "react";
import './styles.scss';

interface IBanner {
    img:string;
}


export const Banner: FC<IBanner> = ({img}) => {
  return (
   <div className='banner'>
       <div className='banner__border'></div>
       <img src={img} alt='Baner' className='banner__img' />
   </div>
  );
};
