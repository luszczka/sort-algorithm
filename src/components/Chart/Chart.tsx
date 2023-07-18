import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

type ChartProps = {
  data: number[];
  isSettingsOpen?: boolean;
};

export const Chart = ({ data, isSettingsOpen }: ChartProps) => {
  return (
    <ResponsiveContainer height={isSettingsOpen ? 300 : 600} width={"100%"}>
      <BarChart data={data}>
        <Tooltip />
        <Bar dataKey={(v) => v} fill="#5b507a" />
      </BarChart>
    </ResponsiveContainer>
  );
};
