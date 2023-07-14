import { ChartValueType } from "../types/types";

type QuckSortTypes = {
  startPoint?: number;
  unsortedNumbers: ChartValueType[];
};

export const quickSort = ({
  startPoint = 0,
  unsortedNumbers,
}: QuckSortTypes): ChartValueType[] => {
  const numbersCount = unsortedNumbers.length;

  if (numbersCount < 2) {
    return unsortedNumbers;
  }

  const timesToLoop = numbersCount - 1;
  const current = unsortedNumbers[numbersCount - 1];
  const left = [];
  const right = [];

  while (startPoint < timesToLoop) {
    if (unsortedNumbers[startPoint].value < current.value) {
      left.push(unsortedNumbers[startPoint]);
    }
    if (unsortedNumbers[startPoint].value >= current.value) {
      right.push(unsortedNumbers[startPoint]);
    }
    startPoint++;
  }

  return [
    ...quickSort({ unsortedNumbers: left }),
    current,
    ...quickSort({ unsortedNumbers: right }),
  ];
};
