import styled, { css } from "styled-components";
import { colors, fontSizes, spacing } from "../../theme/theme";

const StyledButton = styled.button<{ variant: string }>`
  background: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.white_70};
  color: ${(props) => props.theme.colors.white_70};
  cursor: pointer;
  padding: 0.5rem 1rem;

  &:hover {
    background: ${(props) => props.theme.colors.white_70};
    border-color: ${(props) => props.theme.colors.white_20};
    color: ${(props) => props.theme.colors.background};
  }

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background: ${(props) => props.theme.colors.main_dark};
      border-color: ${(props) => props.theme.colors.main_dark};
      color: ${(props) => props.theme.colors.white};
      font-weight: 600;

      &:hover {
        background: ${(props) => props.theme.colors.main_second};
        border-color: ${(props) => props.theme.colors.main_second};
      }
    `};
`;

StyledButton.defaultProps = {
  theme: {
    colors,
    fontSizes,
    spacing,
  },
};

export { StyledButton };
