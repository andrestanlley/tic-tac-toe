import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./style";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  buttonType: "submit" | "reset" | "button";
}

const Button = ({ label, buttonType, ...rest }: IButtonProps) => {
  return (
    <Container>
      <button type={buttonType} {...rest}>
        {label}
      </button>
    </Container>
  );
};

export default Button;
