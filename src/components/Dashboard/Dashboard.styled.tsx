import styled, { css } from "styled-components";
import { colors, fontSizes, spacing } from "../../theme/theme";

const StyledDashboardWrapper = styled.div<{ isSettingsOpen: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding-bottom: 20px;
  position: relative;

  ${({ isSettingsOpen }) =>
    isSettingsOpen &&
    css`
      justify-content: flex-end;
    `};
`;

const StyledSettingsBoardWrapper = styled.div<{ isSettingsOpen: boolean }>`
  background: ${(props) => props.theme.colors.background_dark};
  border-bottom: 1px solid ${(props) => props.theme.colors.white_20};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.space_4};
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.space_4};
  position: fixed;
  top: -293px;
  transition: top 0.4s ease;
  width: -webkit-fill-available;
  z-index: 100;

  @media (min-width: 768px) {
    border-right: 1px solid ${(props) => props.theme.colors.white_20};
    flex-direction: row;
    gap: unset;
    left: -413px;
    max-width: 380px;
    top: 0;
    transition: left 0.4s ease;
  }

  ${({ isSettingsOpen }) =>
    isSettingsOpen &&
    css`
      top: 0;
      transition: top 0.4s ease;

      @media (min-width: 768px) {
        left: 0;
        transition: left 0.4s ease;
      }
    `};
`;

StyledDashboardWrapper.defaultProps = {
  theme: {
    colors,
    fontSizes,
    spacing,
  },
};

StyledSettingsBoardWrapper.defaultProps = {
  theme: {
    colors,
    fontSizes,
    spacing,
  },
};

export { StyledDashboardWrapper, StyledSettingsBoardWrapper };
