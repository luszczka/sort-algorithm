import styled, { css } from "styled-components";
import { colors, fontSizes, spacing } from "../../theme/theme";

const StyledControlsPanelWrapper = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  left: calc(50vw - 90px);
  padding: 0 2rem 2rem;
  position: fixed;
`;

const StyledControlsButton = styled.button<{ variant: string }>`
  align-items: center;
  background: ${(props) => props.theme.colors.main_second};
  border: 1px solid ${(props) => props.theme.colors.main_second};
  border-radius: 50%;
  color: ${(props) => props.theme.colors.background};
  cursor: pointer;
  display: flex;
  font-size: 3rem;
  height: 50px;
  justify-content: center;
  width: 50px;

  & span {
    height: 0.5rem;
    line-height: 0;
    width: 0.8rem;
  }

  &:hover {
    background: ${(props) => props.theme.colors.main};
    border-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.white};
  }

  ${({ variant }) =>
    variant === "small" &&
    css`
      background: ${(props) => props.theme.colors.main};
      border-color: ${(props) => props.theme.colors.main};
      color: ${(props) => props.theme.colors.white};
      font-size: 1rem;
      font-weight: 600;
      height: 30px;
      padding-bottom: 4px;
      width: 30px;

      & span {
        height: 0.2rem;
        font-size: 2rem;
        font-weight: 400;
        line-height: 0;
        width: 0.6rem;
      }

      &:hover {
        background: ${(props) => props.theme.colors.main_second};
        border-color: ${(props) => props.theme.colors.main_second};
        color: ${(props) => props.theme.colors.background};
      }
    `};
`;

StyledControlsButton.defaultProps = {
  theme: {
    colors,
    fontSizes,
    spacing,
  },
};

export { StyledControlsPanelWrapper, StyledControlsButton };
