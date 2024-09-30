import React from 'react'

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, "type"> {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    type?: "button" | "submit" | "reset";
  }

const  Button = ({ children, type = "button", ...rest }: ButtonProps) => {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button