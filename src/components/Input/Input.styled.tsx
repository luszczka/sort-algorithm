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

export { StyledInputWrapper, StyledInputLabel, StyledInput };
