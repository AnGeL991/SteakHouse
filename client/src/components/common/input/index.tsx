import { FC, ChangeEvent, Ref } from 'react';
import './styles.scss';

interface IInput {
  name: string;
  type?: string;
  title?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  reference?: Ref<HTMLInputElement>;
  placeholder?: string;
}

export const Input: FC<IInput> = ({
  name,
  type,
  title,
  onChange,
  value,
  reference,
  placeholder,
}) => {
  return (
    <input
      className="input"
      {...{
        name,
        type,
        title,
        onChange,
        value,
        ref: reference,
        placeholder,
      }}
    />
  );
};
