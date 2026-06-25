import {
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";

export default function LoadDemandChart({
  data
}) {

  return (
    <ResponsiveContainer
      width="100%"
      height={350}
    >

      <AreaChart
        data={data}
      >

        <XAxis
          dataKey="time"
        />

        <YAxis />

        <Tooltip />

        <Area
          dataKey="loadDemand"
        />

      </AreaChart>

    </ResponsiveContainer>
  );
}