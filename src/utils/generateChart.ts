import { ChartOptions } from "../types/types";
import { getChartValues } from "./getChartValues";
import { getRandomNumberInRange } from "./getRandomNumberInRange";

type GenerateChartProps = {
  chartValues?: number[];
  setChartValues: (chartValues: number[]) => void;
  setValues: (chartValues: number[][]) => void;
  setCounter: (initialCount: number) => void;
  setIsSorting: (isSorting: boolean) => void;
};

export const generateChart = ({
  chartValues,
  setChartValues,
  setValues,
  setCounter,
  setIsSorting,
}: GenerateChartProps) => {
  return (
    setChartValues(chartValues || []),
    setValues([chartValues || []]),
    setCounter(0),
    setIsSorting(false)
  );
};

interface GenerateRandomChartProps extends GenerateChartProps {
  setChartOptions: (data: ChartOptions) => void;
}

export const generateRandomChart = ({
  setChartOptions,
  setChartValues,
  setCounter,
  setIsSorting,
  setValues,
}: GenerateRandomChartProps) => {
  const randomChartSize = getRandomNumberInRange({ max: 100, min: 1 });
  const randomMaxRange = getRandomNumberInRange({ max: 100, min: 1 });
  const randomMinRange = getRandomNumberInRange({ max: 100, min: 1 });

  const randomizedChartValues = getChartValues({
    chartSize: randomChartSize,
    maxRange: randomMaxRange,
    minRange: randomMinRange,
  });

  return (
    generateChart({
      chartValues: randomizedChartValues,
      setChartValues,
      setCounter,
      setIsSorting,
      setValues,
    }),
    setChartOptions({
      chartSize: randomChartSize,
      maxRange: randomMaxRange,
      minRange: randomMinRange,
    })
  );
};
