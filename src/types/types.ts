export type Frames = Array<{
  allElements: ChartValueType[];
}>;
export type QuickSort = (array: ChartValueType[]) => Frames;
export type Partition = {
  array: number[];
  start: number;
  end: number;
};
export type Sort = (array: number[], start: number, end: number) => void;
export type Swap = (array: Array<number>, a: number, b: number) => void;

export type ChartValueType = {
  id: number;
  value: number;
};

export type ChartOptions = {
  chartSize: number;
  maxRange: number;
  minRange: number;
};
