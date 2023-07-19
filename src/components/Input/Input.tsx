import { ChangeEvent, InputHTMLAttributes } from "react";
import {
  StyledInput,
  StyledInputLabel,
  StyledInputRange,
  StyledInputWrapper,
} from "./Input.styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputValue: number;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ inputValue, label, onChange }: InputProps) => {
  return (
    <StyledInputWrapper>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledInput onChange={onChange} value={inputValue} />
    </StyledInputWrapper>
  );
};

export const InputRange = ({ inputValue, label, onChange }: InputProps) => {
  return (
    <StyledInputWrapper>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledInputRange
        max={1000}
        min={25}
        onChange={onChange}
        type="range"
        value={inputValue}
      />
    </StyledInputWrapper>
  );
};
