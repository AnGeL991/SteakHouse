import {FC} from 'react';
import './styles.scss';

interface IButton {
    text:string;
    onClick?:()=>void;
}

export const PrimaryButton:FC<IButton> =({text,onClick})=>{

    return <button className='primaryButton' {...{onClick}}>{text}</button>
} 