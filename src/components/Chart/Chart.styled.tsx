import styled, { css } from "styled-components";

const StyledChartWrapper = styled.div<{
  $isSettingsOpen?: boolean;
  $pivotIndex: number | undefined;
  $pivotReference: number | undefined;
}>`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  padding-bottom: 105px;
  position: relative;
  width: 100%;

  ${({ $pivotReference, $pivotIndex }) =>
    $pivotReference &&
    $pivotIndex &&
    css`
      & g > g > g:nth-child(${$pivotIndex}) > path {
        fill: ${(props) => props.theme.colors.main_dark};
      }
      & g > g > g:nth-child(${$pivotReference}) > path {
        fill: ${(props) => props.theme.colors.main_second};
      }
    `};

  ${({ $isSettingsOpen }) =>
    $isSettingsOpen &&
    css`
      padding-bottom: 55px;
    `};

  & path:hover {
    fill: ${(props) => props.theme.colors.main_second};
  }
`;

const StyledTooltip = styled.div<{ $dataElementOffset: number }>`
  bottom: 98px;
  font-size: 3rem;
  font-weight: 900;
  left: ${({ $dataElementOffset }) => $dataElementOffset}px;
  pointer-events: none;
  position: absolute;

  & span {
    color: ${(props) => props.theme.colors.whitest};
    -webkit-text-stroke: 0.5px ${(props) => props.theme.colors.main};
  }
`;

export { StyledChartWrapper, StyledTooltip };
