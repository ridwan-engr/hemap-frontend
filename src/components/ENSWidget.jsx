export default function ENSWidget({
  value
}) {

  return (
    <div className="card">

      <h3>ENS</h3>

      <h1>
        {value}
      </h1>

      <p>kWh</p>

    </div>
  );
}