import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { StyledChartWrapper, StyledTooltip } from "./Chart.styled";
import { ControlsPanel } from "../ControlsPanel/ControlsPanel";
import { useState } from "react";
import { ChartBarEvent } from "../../types/types";

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

  const onMouseEnter = (event: ChartBarEvent) => {
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
        data-testid="testChart"
        $isSettingsOpen={isSettingsOpen}
        $pivotIndex={pivotIndex}
        $pivotReference={pivotReference}
      >
        <ResponsiveContainer height={isSettingsOpen ? 270 : 580} width={"100%"}>
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
          $dataElementOffset={dataElementOffset ? dataElementOffset + 10 : 0}
        >
          <span>{dataElementHeight}</span>
        </StyledTooltip>
      </StyledChartWrapper>
      <ControlsPanel
        count={dataLength - count}
        isSorting={isSorting}
        onSortClick={onSortClick}
      />
    </>
  );
};
