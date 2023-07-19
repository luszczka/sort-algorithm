import styled from "styled-components";
import { colors, fontSizes, spacing } from "../../theme/theme";

const StyledInputWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledInputLabel = styled.label`
  color: ${(props) => props.theme.colors.white_70};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

const StyledInput = styled.input`
  all: unset;
  border-bottom: 1px solid ${(props) => props.theme.colors.white_20};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.paragraph};
  text-align: left;
  width: 100%;
`;

const StyledInputRange = styled.input`
  -webkit-appearance: none;
  appearance: none;
  border-radius: 10px;
  height: 10px;
  margin-top: 10px;
  width: 100%;

  &::-webkit-slider-runnable-track {
    background: ${(props) => props.theme.colors.main_second_light};
    border-radius: 10px;
    height: 10px;
  }

  &::-moz-range-track {
    height: 15px;
    background: ${(props) => props.theme.colors.background};
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: ${(props) => props.theme.colors.main_second};
    border-radius: 50%;
    height: 20px;
    margin-top: -5px;
    width: 20px;
  }
`;

StyledInputLabel.defaultProps = {
  theme: {
    colors,
    fontSizes,
    spacing,
  },
};

StyledInput.defaultProps = {
  theme: {
    colors,
    fontSizes,
    spacing,
  },
};

StyledInputRange.defaultProps = {
  theme: {
    colors,
    fontSizes,
    spacing,
  },
};

export { StyledInputWrapper, StyledInputLabel, StyledInput, StyledInputRange };
