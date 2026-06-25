import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function EnergyChart({
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

        <CartesianGrid
          strokeDasharray="3 3"
        />

        <XAxis
          dataKey="time"
        />

        <YAxis />

        <Tooltip />

        <Area
          dataKey="solarGeneration"
          type="monotone"
        />

        <Area
          dataKey="loadDemand"
          type="monotone"
        />

      </AreaChart>
    </ResponsiveContainer>
  );
}