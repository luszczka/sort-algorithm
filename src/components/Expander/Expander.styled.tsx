import { css, styled } from "styled-components";

const StyledExpanderWrapper = styled.button<{ $isSettingsOpen: boolean }>`
  align-items: center;
  background: ${({ theme }) => theme.colors.main_dark};
  border: none;
  bottom: -32px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  font-size: 2.5rem;
  height: 2rem;
  justify-content: center;
  position: fixed;
  right: 0;
  top: 0;
  transition: top 0.4s ease;
  width: 2rem;
  z-index: 100;

  & span {
    height: 0.5rem;
    line-height: 0;
    transform: rotate(-90deg);
    transition: transform 0.4s ease;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.main_second};
    color: ${({ theme }) => theme.colors.background};
  }

  @media (min-width: 768px) {
    left: 0;
    transition: left 0.4s ease;

    & span {
      transform: rotate(180deg);
      transition: transform 0.4s ease;
    }
  }

  ${({ $isSettingsOpen }) =>
    $isSettingsOpen &&
    css`
      top: 285px;
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

export { StyledExpanderWrapper };
