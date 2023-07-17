import { ChangeEvent, useEffect, useState } from "react";
import { getRandomNumberInRange } from "../../utils/getRandomNumberInRange";
import { useQuickSort } from "../../hooks/useQuickSort";

import {
  StyledChartWrapper,
  StyledDashboardWrapper,
  StyledSettingsBoardWrapper,
} from "./Dashboard.styled";
import { ChartOptions, ChartValueType, Frames } from "../../types/types";
import { getChartValues } from "../../utils/getChartValues";
import { SettingsInputs } from "../SettingsInputs/SettingsInputs";
import { SettingsButtons } from "../SettingsButtons/SettingsButtons";
import { Expander } from "../Expander/Expander";
import { ControlsPanel } from "../ControlsPanel/ControlsPanel";
import { Chart } from "../Chart/Chart";
import { useInterval } from "../../hooks/useInterval";

export const Dashboard = () => {
  const defaultValues = { chartSize: 20, minRange: 1, maxRange: 100 };
  const [chartOptions, setChartOptions] = useState<ChartOptions>({
    chartSize: defaultValues.chartSize,
    minRange: defaultValues.minRange,
    maxRange: defaultValues.maxRange,
  });
  const [chartValues, setChartValues] = useState<ChartValueType[]>();
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  const data = [7, 2, 4, 1, -5, 9, 6];
  const [values, setValues] = useState<number[][]>([data]);

  const [counter, setCounter] = useState(0);

  const callback = (count: number, setCount: any) => {
    if (!values) {
      return;
    }

    if (count >= values.length) {
      setCounter(0);
      setCount(1);
    } else {
      setCounter(count);
    }

    console.log(count);
  };

  const delay = 450;
  const limit = values ? values.length - 1 : 0;

  const run = useInterval({ callback, delay, limit: limit });

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

    setChartValues(
      getChartValues({
        chartSize: randomChartSize,
        maxRange: randomMaxRange,
        minRange: randomMinRange,
      })
    );
  };

  const onResetClick = () => {
    setChartOptions(defaultValues);
    setChartValues(getChartValues(defaultValues));
  };

  const test = useQuickSort({ array: data });

  const onSortClick = () => {
    if (!chartValues) {
      return;
    }
    setValues(test);
    console.log(run);
    // setChartValues(quickSort({ unsortedNumbers: chartValues }));
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
      {values && (
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
