export default function ResilienceIndexWidget({
  value
}) {

  return (
    <div className="card">

      <h3>
        Resilience Index
      </h3>

      <h1>
        {value}
      </h1>

    </div>
  );
}