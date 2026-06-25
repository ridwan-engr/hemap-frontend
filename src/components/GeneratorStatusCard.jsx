export default function GeneratorStatusCard({
  runtime,
  fuelLevel,
  status
}) {

  return (
    <div className="card">

      <h3>Generator</h3>

      <p>
        Runtime:
        {runtime} hrs
      </p>

      <p>
        Fuel:
        {fuelLevel}%
      </p>

      <p>
        Status:
        {status}
      </p>

    </div>
  );
}