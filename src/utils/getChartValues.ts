import { ChartOptions } from "../types/types";
import { getRandomNumberInRange } from "./getRandomNumberInRange";

export const getChartValues = ({
  chartSize,
  maxRange,
  minRange,
}: ChartOptions) => {
  const result = Array.from({ length: chartSize }, () => {
    return getRandomNumberInRange({ max: maxRange, min: minRange });
  });

  return result;
};
