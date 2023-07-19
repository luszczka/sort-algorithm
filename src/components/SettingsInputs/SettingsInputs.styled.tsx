import styled from "styled-components";
import { colors, fontSizes, spacing } from "../../theme/theme";

const StyledSettingsInputs = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-between;
  max-height: 120px;

  @media (min-width: 768px) {
    max-width: 250px;
  }
`;

const StyledInputsBeside = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.space_4};
`;

const StyledInputWithLabel = styled.div`
  display: flex;
  width: 100%;
`;

const StyledHeding = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.paragraph};
  text-align: left;
  width: 100%;
`;

StyledHeding.defaultProps = {
  theme: {
    colors,
    fontSizes,
    spacing,
  },
};

StyledInputsBeside.defaultProps = {
  theme: {
    colors,
    fontSizes,
    spacing,
  },
};

StyledSettingsInputs.defaultProps = {
  theme: {
    colors,
    fontSizes,
    spacing,
  },
};

export {
  StyledSettingsInputs,
  StyledInputsBeside,
  StyledInputWithLabel,
  StyledHeding,
};
