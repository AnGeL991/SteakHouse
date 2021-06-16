import { FC, ReactNode } from "react";
import './styles.scss'
interface IContainer {
  children: ReactNode;
}

export const ContainerLayout: FC<IContainer> = ({ children }) => {
  return <section className='container'>{children}</section>;
};
