type QuckSortTypes = {
  startPoint?: number;
  unsortedNumbers: number[];
};

export const quickSort = ({
  startPoint = 0,
  unsortedNumbers,
}: QuckSortTypes): number[] => {
  const numbersCount = unsortedNumbers.length;

  if (numbersCount < 2) {
    return unsortedNumbers;
  }

  const timesToLoop = numbersCount - 1;
  const current = unsortedNumbers[numbersCount - 1];
  const left = [];
  const right = [];

  while (startPoint < timesToLoop) {
    if (unsortedNumbers[startPoint] < current) {
      left.push(unsortedNumbers[startPoint]);
    }
    if (unsortedNumbers[startPoint] >= current) {
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
