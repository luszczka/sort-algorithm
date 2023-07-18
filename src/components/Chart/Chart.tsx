import { BarChart, Bar, ResponsiveContainer } from "recharts";
import {
  StyledChartWrapper,
  StyledCounterWrapper,
  StyledTooltip,
} from "./Chart.styled";
import { ControlsPanel } from "../ControlsPanel/ControlsPanel";
import { RemainingStepsCounter } from "../RemainingStepsCounter/RemainingStepsCounter";
import { useState } from "react";

type ChartProps = {
  count: number;
  data: number[];
  dataLength: number;
  isSettingsOpen?: boolean;
  isSorting?: boolean;
  onSortClick: () => void;
  pivots: {
    pivotIndex: number;
    i: number;
  }[];
};

export const Chart = ({
  count,
  data,
  dataLength,
  isSettingsOpen,
  isSorting,
  onSortClick,
  pivots,
}: ChartProps) => {
  const [dataElementHeight, setDataElementHeight] = useState<number>();
  const [dataElementOffset, setDataElementOffset] = useState<number>();
  const pivotIndex = pivots.length > 0 ? pivots[count].pivotIndex : undefined;
  const pivotReference =
    isSorting && pivots.length > 0 ? pivots[count].i : undefined;

  const onMouseEnter = (event: any) => {
    setDataElementHeight(event.value);
    setDataElementOffset(event.background.x);
  };

  const onMouseLeave = () => {
    setDataElementHeight(undefined);
    setDataElementOffset(undefined);
  };

  return (
    <>
      <StyledChartWrapper
        pivotIndex={pivotIndex}
        pivotReference={pivotReference}
      >
        <ResponsiveContainer height={isSettingsOpen ? 300 : 600} width={"100%"}>
          <BarChart data={data}>
            <Bar
              dataKey={(v) => v}
              fill="#5b507a"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          </BarChart>
        </ResponsiveContainer>
        <StyledTooltip
          dataElementOffset={dataElementOffset ? dataElementOffset + 10 : 0}
        >
          <span>{dataElementHeight}</span>
        </StyledTooltip>
      </StyledChartWrapper>
      <ControlsPanel isSorting={isSorting} onSortClick={onSortClick} />
      <StyledCounterWrapper>
        <RemainingStepsCounter count={dataLength - count} />
      </StyledCounterWrapper>
    </>
  );
};
