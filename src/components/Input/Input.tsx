import { ChangeEvent } from "react";
import {
  StyledInput,
  StyledInputLabel,
  StyledInputWrapper,
} from "./Input.styled";

type InputProps = {
  inputValue: number;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ inputValue, label, onChange }: InputProps) => {
  return (
    <StyledInputWrapper>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledInput onChange={onChange} value={inputValue} />
    </StyledInputWrapper>
  );
};
