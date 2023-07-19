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

export type ChartBarEventBackground = {
  height: number;
  width: number;
  x: number;
  y: number;
};

export type TooltipPayload = {
  charType: number;
  color: string;
  dataKey: () => void;
  fill: string;
  formatter: string;
  name: () => void;
  payload: number;
  type: string;
  unit: string;
  value: number;
};

export type TooltipPosition = {
  x: number;
  y: number;
};

export type ChartBarEvent = {
  background: ChartBarEventBackground;
  height: number;
  payload: number;
  tooltipPayload: TooltipPayload[];
  tooltipPosition: TooltipPosition;
  value: number;
  width: number;
  x: number;
  y: number;
};
