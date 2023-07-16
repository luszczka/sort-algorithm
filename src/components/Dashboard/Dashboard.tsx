import { ChangeEvent, useState } from "react";
import { getRandomNumberInRange } from "../../utils/getRandomNumberInRange";
import { quickSort } from "../../utils/quickSort";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

import {
  StyledChartWrapper,
  StyledDashboardWrapper,
  StyledSettingsBoardWrapper,
} from "./Dashboard.styled";
import { ChartOptions, ChartValueType } from "../../types/types";
import { getChartValues } from "../../utils/getChartValues";
import { SettingsInputs } from "../SettingsInputs/SettingsInputs";
import { SettingsButtons } from "../SettingsButtons/SettingsButtons";
import { Expander } from "../Expander/Expander";
import { ControlsPanel } from "../ControlsPanel/ControlsPanel";

export const Dashboard = () => {
  const defaultValues = { chartSize: 20, minRange: 1, maxRange: 100 };

  const [chartOptions, setChartOptions] = useState<ChartOptions>({
    chartSize: defaultValues.chartSize,
    minRange: defaultValues.minRange,
    maxRange: defaultValues.maxRange,
  });

  const [chartValues, setChartValues] = useState<ChartValueType[]>();

  const [isSettingsOpen, setIsSettingsOpen] = useState(true);

  const onExpanderClick = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const onMaxRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChartOptions({ ...chartOptions, maxRange: +event.target.value });
  };

  const onMinRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChartOptions({ ...chartOptions, minRange: +event.target.value });
  };

  const onElementsCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChartOptions({ ...chartOptions, chartSize: +event.target.value });
  };

  const onGenerateChartClick = () => {
    setChartValues(getChartValues(chartOptions));
    console.log(chartValues);
  };

  const onRandomClick = () => {
    setChartOptions({
      chartSize: getRandomNumberInRange({ max: 100, min: 1 }),
      maxRange: getRandomNumberInRange({ max: 100, min: 1 }),
      minRange: getRandomNumberInRange({ max: 100, min: 1 }),
    });
  };

  const onResetClick = () => {
    setChartOptions(defaultValues);
    setChartValues(getChartValues(defaultValues));
  };

  const onSortClick = () => {
    if (!chartValues) {
      return;
    }
    setChartValues(quickSort({ unsortedNumbers: chartValues }));
  };

  const onFrameBack = () => {};

  const onFrameForward = () => {};

  return (
    <StyledDashboardWrapper>
      <StyledSettingsBoardWrapper isSettingsOpen={isSettingsOpen}>
        <SettingsInputs
          chartOptions={chartOptions}
          onElementsCountChange={onElementsCountChange}
          onMaxRangeChange={onMaxRangeChange}
          onMinRangeChange={onMinRangeChange}
        />
        <SettingsButtons
          onGenerateChartClick={onGenerateChartClick}
          onRandomClick={onRandomClick}
          onResetClick={onResetClick}
        />
      </StyledSettingsBoardWrapper>
      <Expander isSettingsOpen={isSettingsOpen} onClick={onExpanderClick} />
      {chartValues && (
        <StyledChartWrapper>
          <ResponsiveContainer minWidth={100} minHeight={100}>
            <BarChart data={chartValues}>
              <Bar dataKey="value" fill="#5b507a" />
            </BarChart>
          </ResponsiveContainer>
        </StyledChartWrapper>
      )}
      <ControlsPanel
        onFrameBack={onFrameBack}
        onFrameForward={onFrameForward}
        onSortClick={onSortClick}
      />
    </StyledDashboardWrapper>
  );
};
