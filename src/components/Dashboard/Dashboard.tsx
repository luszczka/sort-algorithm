import { ChangeEvent, useState } from "react";
import { getRandomNumberInRange } from "../../utils/getRandomNumberInRange";
import { quickSort } from "../../utils/quickSort";
import { BarChart, Bar } from "recharts";

import {
  StyledButtonsWrapper,
  StyledChartWrapper,
  StyledDashboardWrapper,
} from "./Dashboard.styled";
import { ChartOptions, ChartValueType } from "../../types/types";
import { getChartValues } from "../../utils/getChartValues";

export const Dashboard = () => {
  const defaultValues = { chartSize: 20, minRange: 1, maxRange: 100 };

  const [chartOptions, setChartOptions] = useState<ChartOptions>({
    chartSize: defaultValues.chartSize,
    minRange: defaultValues.minRange,
    maxRange: defaultValues.maxRange,
  });

  const [chartValues, setChartValues] = useState<ChartValueType[]>();

  const onMaxRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChartOptions({ ...chartOptions, maxRange: +event.target.value });
  };

  const onMinRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChartOptions({ ...chartOptions, minRange: +event.target.value });
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChartOptions({ ...chartOptions, chartSize: +event.target.value });
  };

  const onGenerateChartClick = () => {
    setChartValues(getChartValues(chartOptions));
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

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          set the chart range from
          <input
            onChange={onMinRangeChange}
            type="number"
            value={chartOptions.minRange}
          />
          to
          <input
            onChange={onMaxRangeChange}
            type="number"
            value={chartOptions.maxRange}
          />
          set the chart size
          <input
            onChange={onInputChange}
            type="number"
            value={chartOptions.chartSize}
          />
          <button onClick={onGenerateChartClick}>Generate chart</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            onClick={onRandomClick}
            style={{
              height: "70%",
            }}
          >
            get all random
          </button>
          <button
            onClick={onResetClick}
            style={{
              height: "30%",
            }}
          >
            reset
          </button>
        </div>
        <button
          style={{ backgroundColor: "#5b507a", width: "200px" }}
          onClick={onSortClick}
        >
          sort
        </button>
      </div>
      {chartValues && (
        <div>
          <BarChart width={500} height={500} data={chartValues}>
            <Bar dataKey="value" fill="#5b507a" />
          </BarChart>
        </div>
      )}
      <StyledDashboardWrapper>
        <StyledButtonsWrapper>
          <button>Generate numbers</button>
        </StyledButtonsWrapper>
        <StyledChartWrapper>chart</StyledChartWrapper>
      </StyledDashboardWrapper>
    </>
  );
};
