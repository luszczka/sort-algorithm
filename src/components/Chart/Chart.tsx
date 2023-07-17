import { ChartValueType } from "../../types/types";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

type ChartProps = {
  data: ChartValueType[];
  isSettingsOpen?: boolean;
};

export const Chart = ({ data, isSettingsOpen }: ChartProps) => {
  return (
    <ResponsiveContainer height={isSettingsOpen ? 300 : 600} width={"100%"}>
      <BarChart data={data}>
        <Tooltip />
        <Bar dataKey="value" fill="#5b507a" />
      </BarChart>
    </ResponsiveContainer>
  );
};
