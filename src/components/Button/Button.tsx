import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  onClick,
  variant = "secondary",
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} $variant={variant}>
      {children}
    </StyledButton>
  );
};
