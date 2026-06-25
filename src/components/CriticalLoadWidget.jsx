export default function CriticalLoadWidget({
  value
}) {

  return (
    <div className="card">

      <h3>
        Critical Load Served
      </h3>

      <h1>
        {value}
      </h1>

      <p>%</p>

    </div>
  );
}