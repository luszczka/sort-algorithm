import { ChangeEvent, useEffect, useState } from "react";
import { getRandomNumberInRange } from "../../utils/getRandomNumberInRange";
import { useQuickSort } from "../../hooks/useQuickSort";

import {
  StyledChartWrapper,
  StyledDashboardWrapper,
  StyledSettingsBoardWrapper,
} from "./Dashboard.styled";
import { ChartOptions } from "../../types/types";
import { getChartValues } from "../../utils/getChartValues";
import { SettingsInputs } from "../SettingsInputs/SettingsInputs";
import { SettingsButtons } from "../SettingsButtons/SettingsButtons";
import { Expander } from "../Expander/Expander";
import { ControlsPanel } from "../ControlsPanel/ControlsPanel";
import { Chart } from "../Chart/Chart";

export const Dashboard = () => {
  const defaultValues = { chartSize: 5, minRange: 1, maxRange: 100 };
  const [chartOptions, setChartOptions] = useState<ChartOptions>({
    chartSize: defaultValues.chartSize,
    minRange: defaultValues.minRange,
    maxRange: defaultValues.maxRange,
  });

  const [chartValues, setChartValues] = useState<number[]>();
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);

  const [values, setValues] = useState<number[][]>([]);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (values && counter < values.length - 1) {
      const interval = window.setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 300);
      return () => window.clearInterval(interval);
    }
  }, [values, counter]);

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
    const temp = getChartValues(chartOptions);
    setChartValues(temp);
    setValues([]);
    setCounter(0);
  };

  const onRandomClick = () => {
    const randomChartSize = getRandomNumberInRange({ max: 100, min: 1 });
    const randomMaxRange = getRandomNumberInRange({ max: 100, min: 1 });
    const randomMinRange = getRandomNumberInRange({ max: 100, min: 1 });

    setChartOptions({
      chartSize: randomChartSize,
      maxRange: randomMaxRange,
      minRange: randomMinRange,
    });
    const temp = getChartValues({
      chartSize: randomChartSize,
      maxRange: randomMaxRange,
      minRange: randomMinRange,
    });
    setChartValues(temp);
    setValues([]);
    setCounter(0);
  };

  const onResetClick = () => {
    const temp = getChartValues(defaultValues);
    setChartOptions(defaultValues);
    setChartValues(temp);
    setValues([]);
    setCounter(0);
  };

  const { frames, quickSort } = useQuickSort({ array: chartValues ?? [] });

  const onSortClick = () => {
    if (!chartValues) {
      return;
    }
    quickSort(chartValues);
  };

  const onFrameBack = () => {};

  const onFrameForward = () => {};

  useEffect(() => {
    setValues(frames);
  }, [frames]);

  useEffect(() => {
    setValues([]);
  }, [chartValues]);

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
      {/* {chartValues && chartValues?.length > 0 && (
        <StyledChartWrapper>
          <Chart
            data={values[counter] ?? chartValues}
            isSettingsOpen={isSettingsOpen}
          />
        </StyledChartWrapper>
      )} */}
      {chartValues && chartValues?.length > 0 && values.length < 1 && (
        <StyledChartWrapper>
          <Chart data={chartValues} isSettingsOpen={isSettingsOpen} />
        </StyledChartWrapper>
      )}
      {values.length > 0 && (
        <StyledChartWrapper>
          <Chart data={values[counter]} isSettingsOpen={isSettingsOpen} />
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
