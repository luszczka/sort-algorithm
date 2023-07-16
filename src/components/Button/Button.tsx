import { ReactNode } from "react";
import { StyledButton } from "./Button.styles";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
};

export const Button = ({
  children,
  onClick,
  variant = "secondary",
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
};
