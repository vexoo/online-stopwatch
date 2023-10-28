import { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  text: string;
  buttonType?: "normal" | "text";
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  text,
  buttonType,
  children,
  ...props
}: ButtonProps) => {
  const normalButtonDefaultClass =
    "cursor-pointer rounded-md border-none bg-gray-500 px-3 py-1 text-center text-sm uppercase tracking-wide text-gray-500 text-white shadow-md dark:text-gray-300";
  const textButtonDefaultClass = "text-x2 "; //dark:text-white

  const defaultClassName =
    buttonType === "text" ? textButtonDefaultClass : normalButtonDefaultClass;

  return (
    <button
      className={`${defaultClassName} ${className}`}
      onClick={onClick}
      {...props}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
