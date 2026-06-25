import {
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";

export default function SolarPowerChart({
  data
}) {

  return (
    <ResponsiveContainer
      width="100%"
      height={350}
    >

      <LineChart
        data={data}
      >

        <XAxis
          dataKey="time"
        />

        <YAxis />

        <Tooltip />

        <Line
          dataKey="solarPower"
        />

      </LineChart>

    </ResponsiveContainer>
  );
}