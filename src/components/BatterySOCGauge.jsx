import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer
} from "recharts";

export default function BatterySOCGauge({
  soc = 0
}) {

  const data = [
    {
      name: "SOC",
      value: soc
    }
  ];

  return (
    <div>

      <h3>
        Battery SOC
      </h3>

      <ResponsiveContainer
        width="100%"
        height={250}
      >
        <RadialBarChart
          innerRadius="70%"
          outerRadius="100%"
          data={data}
          startAngle={180}
          endAngle={0}
        >

          <RadialBar
            dataKey="value"
          />

        </RadialBarChart>
      </ResponsiveContainer>

      <h2>{soc}%</h2>

    </div>
  );
}