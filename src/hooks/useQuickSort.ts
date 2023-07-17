import { useEffect, useState } from "react";
import { Partition, Sort } from "../types/types";
import { swapElementsInArray } from "../utils/swapElementsInArray";

type QuckSortTypes = {
  array: number[];
};

export const useQuickSort = ({ array }: QuckSortTypes) => {
  const [frames, setFrames] = useState<number[][]>([]);

  const partition = ({ array, start, end }: Partition): number => {
    let pivotIndex = start;
    const pivotValue = array[end];

    for (let i = start; i < end; i++) {
      if (array[i] < pivotValue) {
        swapElementsInArray({ array: array, a: i, b: pivotIndex });
        pivotIndex++;
      }
      const temp = [...array];
      setFrames((previous) => [...previous, temp]);
    }

    swapElementsInArray({ array: array, a: pivotIndex, b: end });
    return pivotIndex;
  };

  const sort: Sort = (array, start, end) => {
    if (end <= start) return;

    const index = partition({ array: array, start, end });
    sort(array, start, index - 1);
    sort(array, index + 1, end);
  };

  const quickSort = (array: number[]) => {
    sort(array, 0, array.length - 1);
  };

  useEffect(() => {
    quickSort([...array]);
  }, []);

  return frames;
};
