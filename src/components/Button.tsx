import { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  text?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  text,
  icon,
  children,
  ...props
}: ButtonProps) => {
  const buttonDefaultClass =
    "cursor-pointer rounded-md border-none bg-gray-500 px-3 py-1 text-center text-sm uppercase tracking-wide text-gray-500 text-white shadow-md dark:text-gray-300";

  return (
    <button
      className={`${buttonDefaultClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {!icon && text}
      {children}
    </button>
  );
};

export default Button;
