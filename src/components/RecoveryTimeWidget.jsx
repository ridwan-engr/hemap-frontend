export default function RecoveryTimeWidget({
  value
}) {

  return (
    <div className="card">

      <h3>
        Recovery Time
      </h3>

      <h1>
        {value}
      </h1>

      <p>hours</p>

    </div>
  );
}