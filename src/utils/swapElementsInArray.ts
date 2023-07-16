import { ChartValueType } from "../types/types";
import { freeze } from "./freeze";

type SwapElementsInArrayTypes = {
  array: ChartValueType[];
  a: number;
  b: number;
};

export const swapElementsInArray = async ({
  array,
  a,
  b,
}: SwapElementsInArrayTypes) => {
  await freeze();

  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
};
