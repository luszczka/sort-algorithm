import styled, { css } from "styled-components";
import { colors, fontSizes, spacing } from "../../theme/theme";

const StyledChartWrapper = styled.div<{
  pivotIndex: number | undefined;
  pivotReference: number | undefined;
}>`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;

  ${({ pivotReference, pivotIndex }) =>
    pivotReference &&
    pivotIndex &&
    css`
      & g > g > g:nth-child(${pivotIndex}) > path {
        fill: ${(props) => props.theme.colors.main_dark};
      }
      & g > g > g:nth-child(${pivotReference}) > path {
        fill: ${(props) => props.theme.colors.main_second};
      }
    `};

  & path:hover {
    fill: ${(props) => props.theme.colors.main_second};
  }
`;

const StyledTooltip = styled.div<{ dataElementOffset: number }>`
  bottom: -6px;
  font-size: 3rem;
  font-weight: 900;
  left: ${({ dataElementOffset }) => dataElementOffset}px;
  pointer-events: none;
  position: absolute;

  & span {
    color: ${(props) => props.theme.colors.whitest};
    -webkit-text-stroke: 0.5px ${(props) => props.theme.colors.main};
  }
`;

const StyledCounterWrapper = styled.div`
  height: 70px;
  width: 100%;
`;

StyledChartWrapper.defaultProps = {
  theme: {
    colors,
    fontSizes,
    spacing,
  },
};

StyledTooltip.defaultProps = {
  theme: {
    colors,
    fontSizes,
    spacing,
  },
};

export { StyledChartWrapper, StyledCounterWrapper, StyledTooltip };
