import styled from "styled-components";
import { colors, fontSizes, spacing } from "../../theme/theme";

const StyledControlsPanelWrapper = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.background_opacity};
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 64px;
  justify-content: center;
  position: fixed;
  width: 100%;
`;

const StyledControlsButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 100;
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
  margin-top: 10px;
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

StyledControlsPanelWrapper.defaultProps = {
  theme: {
    colors,
    fontSizes,
    spacing,
  },
};

StyledControlsButton.defaultProps = {
  theme: {
    colors,
    fontSizes,
    spacing,
  },
};

export {
  StyledControlsPanelWrapper,
  StyledControlsButtonWrapper,
  StyledControlsButton,
};
