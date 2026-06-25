export default function GridAvailabilityCard({
  availability,
  outages
}) {

  return (
    <div className="card">

      <h3>
        Grid Availability
      </h3>

      <h1>
        {availability}%
      </h1>

      <p>
        Outages:
        {outages}
      </p>

    </div>
  );
}