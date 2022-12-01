type Props = {
  text?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
};

const Button = ({ text = "button", onClick, className, type }: Props) => {
  return (
    <button className={`btn_orange ${className}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
