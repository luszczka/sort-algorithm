import styled, { css } from "styled-components";

const StyledButton = styled.button<{ variant: string }>`
  background: ${({ theme }) => theme.colors.background_dark};
  border: 1px solid ${({ theme }) => theme.colors.white_70};
  color: ${({ theme }) => theme.colors.white_70};
  cursor: pointer;
  padding: 0.5rem 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.white_70};
    border-color: ${({ theme }) => theme.colors.white_20};
    color: ${({ theme }) => theme.colors.background};
  }

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background: ${({ theme }) => theme.colors.main_dark};
      border-color: ${({ theme }) => theme.colors.main_dark};
      color: ${({ theme }) => theme.colors.white};
      font-weight: 600;

      &:hover {
        background: ${({ theme }) => theme.colors.main_second};
        border-color: ${({ theme }) => theme.colors.main_second};
      }
    `};
`;

export { StyledButton };
