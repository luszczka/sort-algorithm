type SwapElementsInArrayTypes = {
  array: number[];
  a: number;
  b: number;
};

export const swapElementsInArray = async ({
  array,
  a,
  b,
}: SwapElementsInArrayTypes) => {
  if (array[a] === undefined || array[b] === undefined) {
    throw new Error("Parameter is out of scope");
  }

  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  return array;
};
