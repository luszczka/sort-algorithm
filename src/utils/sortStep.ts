import { ChartValueType } from "../types/types";
import { swapElementsInArray } from "./swapElementsInArray";

type SortStepTypes = {
  array: ChartValueType[];
  endPoint: number;
  startPoint: number;
};

export const sortStep = async ({
  array,
  endPoint = array.length - 1,
  startPoint,
}: SortStepTypes) => {
  let stepIndex = startPoint;
  let stepValue = array[endPoint].value;

  for (let i = startPoint; i < endPoint; i++) {
    if (array[i].value < stepValue) {
      await swapElementsInArray({ array, a: i, b: stepIndex });
      stepIndex++;
    }
  }

  await swapElementsInArray({ array, a: stepIndex, b: endPoint });

  return stepIndex;
};
