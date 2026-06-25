export default function SiteCard({
  site
}) {

  return (
    <div
      style={{
        background: "#fff",
        padding: "15px",
        borderRadius: "10px",
        marginBottom: "10px",
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      <h3>
        {site.siteName}
      </h3>

      <p>
        Location:
        {site.location}
      </p>

      <p>
        Capacity:
        {site.capacity}
      </p>

      <p>
        Status:
        {site.status}
      </p>
    </div>
  );
}