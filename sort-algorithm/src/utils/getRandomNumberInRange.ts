type RandomNumberInRangeTypes = {
  max: number;
  min: number;
};

export const getRandomNumberInRange = ({
  max,
  min,
}: RandomNumberInRangeTypes) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
