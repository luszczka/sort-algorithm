import { ChangeEvent, useEffect, useState } from "react";
import { useQuickSort } from "../../hooks/useQuickSort";

import {
  StyledDashboardWrapper,
  StyledSettingsBoardWrapper,
} from "./Dashboard.styled";
import { ChartOptions } from "../../types/types";
import { getChartValues } from "../../utils/getChartValues";
import { SettingsInputs } from "../SettingsInputs/SettingsInputs";
import { SettingsButtons } from "../SettingsButtons/SettingsButtons";
import { Expander } from "../Expander/Expander";
import { Chart } from "../Chart/Chart";
import { generateChart, generateRandomChart } from "../../utils/generateChart";

export const Dashboard = () => {
  const defaultValues = { chartSize: 10, minRange: 1, maxRange: 100 };
  const [chartOptions, setChartOptions] = useState<ChartOptions>({
    chartSize: defaultValues.chartSize,
    minRange: defaultValues.minRange,
    maxRange: defaultValues.maxRange,
  });
  const [chartValues, setChartValues] = useState<number[]>();
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  const [values, setValues] = useState<number[][]>([]);
  const [counter, setCounter] = useState(0);
  const [isSorting, setIsSorting] = useState(false);
  const [sortSpeed, setSortSpeed] = useState(700);

  const { frames, quickSort, pivots } = useQuickSort({
    array: chartValues ?? [],
  });

  useEffect(() => {
    if (values && counter < values.length - 1 && isSorting) {
      const interval = window.setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000 - sortSpeed);
      return () => window.clearInterval(interval);
    }
    if (counter > 0 && counter === values.length - 1) {
      setIsSorting(false);
    }
  }, [values, counter, isSorting]);

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
  const onSortSpeedChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSortSpeed(+event.target.value);
  };

  const onGenerateChartClick = () => {
    generateChart({
      chartValues: getChartValues(chartOptions),
      setChartValues,
      setCounter,
      setIsSorting,
      setValues,
    });
  };
  const onRandomClick = () => {
    generateRandomChart({
      setChartOptions,
      setChartValues,
      setCounter,
      setIsSorting,
      setValues,
    });
  };
  const onResetClick = () => {
    setChartOptions(defaultValues);
    generateChart({
      chartValues: getChartValues(defaultValues),
      setChartValues,
      setCounter,
      setIsSorting,
      setValues,
    });
  };

  const onSortClick = () => {
    if (!chartValues) {
      return;
    }
    setIsSorting(!isSorting);
    if (!isSorting && values.length < 1) {
      quickSort(chartValues);
    }
    if (!isSorting && values.length > 0) {
      quickSort(values[counter]);
    }
  };

  useEffect(() => {
    if (!chartValues) return;
    setValues(frames);
  }, [frames]);

  const displayData =
    values.length < 1 && chartValues && chartValues?.length > 0
      ? [chartValues]
      : values;

  return (
    <StyledDashboardWrapper $isSettingsOpen={isSettingsOpen}>
      <StyledSettingsBoardWrapper $isSettingsOpen={isSettingsOpen}>
        <SettingsInputs
          chartOptions={chartOptions}
          onElementsCountChange={onElementsCountChange}
          onMaxRangeChange={onMaxRangeChange}
          onMinRangeChange={onMinRangeChange}
          onSortSpeedChange={onSortSpeedChange}
          sortSpeed={sortSpeed}
        />
        <SettingsButtons
          onGenerateChartClick={onGenerateChartClick}
          onRandomClick={onRandomClick}
          onResetClick={onResetClick}
        />
      </StyledSettingsBoardWrapper>
      <Expander isSettingsOpen={isSettingsOpen} onClick={onExpanderClick} />
      {displayData.length > 0 && (
        <Chart
          count={counter}
          dataLength={displayData.length}
          data={displayData[counter]}
          isSettingsOpen={isSettingsOpen}
          isSorting={isSorting}
          onSortClick={onSortClick}
          pivots={pivots}
        />
      )}
    </StyledDashboardWrapper>
  );
};
