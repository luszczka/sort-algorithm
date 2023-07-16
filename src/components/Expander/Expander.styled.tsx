import { css, styled } from "styled-components";
import { colors, fontSizes, spacing } from "../../theme/theme";

const StyledExpanderWrapper = styled.button<{ isSettingsOpen: boolean }>`
  align-items: center;
  background: ${(props) => props.theme.colors.main};
  border: none;
  bottom: -32px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  font-size: 2.5rem;
  height: 2rem;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  transition: top 0.4s ease;
  width: 2rem;

  & span {
    height: 0.5rem;
    line-height: 0;
    transform: rotate(-90deg);
    transition: transform 0.4s ease;
  }

  &:hover {
    background: ${(props) => props.theme.colors.main_second};
    color: ${(props) => props.theme.colors.background};
  }

  @media (min-width: 768px) {
    left: 0;
    transition: left 0.4s ease;

    & span {
      transform: rotate(180deg);
      transition: transform 0.4s ease;
    }
  }

  ${({ isSettingsOpen }) =>
    isSettingsOpen &&
    css`
      top: 286px;
      transition: top 0.4s ease;

      & span {
        transform: rotate(90deg);
        transition: transform 0.4s ease;
      }

      @media (min-width: 768px) {
        bottom: unset;
        left: 413px;
        right: unset;
        top: 0;
        transition: left 0.4s ease;

        & span {
          transform: rotate(0);
          transition: transform 0.4s ease;
        }
      }
    `};
`;

StyledExpanderWrapper.defaultProps = {
  theme: {
    colors,
    fontSizes,
    spacing,
  },
};

export { StyledExpanderWrapper };
