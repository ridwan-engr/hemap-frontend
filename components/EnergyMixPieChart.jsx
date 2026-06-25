import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function EnergyMixPieChart({
  data
}) {

  return (
    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <PieChart>

        <Pie
          data={data}
          dataKey="value"
          nameKey="source"
        />

        <Tooltip />

      </PieChart>
    </ResponsiveContainer>
  );
}