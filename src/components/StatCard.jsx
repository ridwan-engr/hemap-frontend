export default function StatCard({
  title,
  value,
  unit
}) {

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "10px",
        padding: "20px",
        boxShadow:
          "0 2px 10px rgba(0,0,0,0.1)"
      }}
    >
      <h4>{title}</h4>

      <h2>
        {value}
        {unit && ` ${unit}`}
      </h2>
    </div>
  );
}