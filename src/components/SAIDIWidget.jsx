export default function SAIDIWidget({
  value
}) {

  return (
    <div className="card">

      <h3>SAIDI</h3>

      <h1>
        {value}
      </h1>

      <p>
        min/customer
      </p>

    </div>
  );
}