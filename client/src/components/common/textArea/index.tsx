import { FC, ChangeEvent, Ref } from 'react';
import './styles.scss';

interface ITextArea {
  name?: string;
  value?: string;
  rows?: number;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  reference?: Ref<HTMLTextAreaElement>;
}

export const TextArea: FC<ITextArea> = ({
  name,
  value,
  rows,
  placeholder,
  onChange,
  reference,
}) => {
  return (
    <textarea
    className='textArea'
      {...{
        name,
        value,
        rows,
        placeholder,
        onChange,
        ref: reference,
      }}
    />
  );
};
