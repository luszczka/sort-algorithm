import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";
import { StyledChartWrapper, StyledCounterWrapper } from "./Chart.styled";
import { ControlsPanel } from "../ControlsPanel/ControlsPanel";
import { RemainingStepsCounter } from "../RemainingStepsCounter/RemainingStepsCounter";

type ChartProps = {
  count: number;
  data: number[];
  isSettingsOpen?: boolean;
  isSorting?: boolean;
  onSortClick: () => void;
};

export const Chart = ({
  count,
  data,
  isSettingsOpen,
  isSorting,
  onSortClick,
}: ChartProps) => {
  return (
    <>
      <StyledChartWrapper>
        <ResponsiveContainer height={isSettingsOpen ? 300 : 600} width={"100%"}>
          <BarChart data={data}>
            <Tooltip />
            <Bar dataKey={(v) => v} fill="#5b507a" />
          </BarChart>
        </ResponsiveContainer>
      </StyledChartWrapper>
      <ControlsPanel isSorting={isSorting} onSortClick={onSortClick} />
      <StyledCounterWrapper>
        <RemainingStepsCounter count={count} isSorting={isSorting} />
      </StyledCounterWrapper>
    </>
  );
};
