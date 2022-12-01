import { ChangeEvent, HTMLInputTypeAttribute } from "react";

type Props = {
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: HTMLInputTypeAttribute | undefined;
  labelText?: string;
  id?: string;
};

const Input = ({
  placeholder,
  onChange,
  onBlur,
  onFocus,
  value,
  type,
  id,
  labelText,
}: Props) => {
  return (
    <div className="input_container">
      <label htmlFor={id}>{labelText}</label>
      <input
        value={value}
        id={id}
        type={type}
        className="input"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </div>
  );
};

export default Input;
