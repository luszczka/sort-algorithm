import styled, { css } from "styled-components";
import { colors, fontSizes, spacing } from "../../theme/theme";

const StyledControlsPanelWrapper = styled.div`
  align-items: center;
  bottom: 20px;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
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

  & div {
    font-size: 1.8rem;
    font-weight: 600;
    height: 0.3rem;
    line-height: 0;
    width: 1.3rem;
  }

  & span {
    height: 0.5rem;
    line-height: 0;
    width: 0.8rem;
  }

  &:hover {
    background: ${(props) => props.theme.colors.main_dark};
    border-color: ${(props) => props.theme.colors.main_dark};
    color: ${(props) => props.theme.colors.white};
  }
`;

StyledControlsButton.defaultProps = {
  theme: {
    colors,
    fontSizes,
    spacing,
  },
};

export { StyledControlsPanelWrapper, StyledControlsButton };
