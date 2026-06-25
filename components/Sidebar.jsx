import {
  Link
} from "react-router-dom";

export default function Sidebar() {

  return (
    <div
      style={{
        width: "250px",
        background: "#1a202c",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <h2>HEMAP</h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0
        }}
      >
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/sites">Sites</Link></li>
        <li><Link to="/solar">Solar</Link></li>
        <li><Link to="/battery">Battery</Link></li>
        <li><Link to="/generator">Generator</Link></li>
        <li><Link to="/grid">Grid</Link></li>
        <li><Link to="/energy">Energy</Link></li>
        <li><Link to="/forecast">Forecast</Link></li>
        <li><Link to="/faults">Faults</Link></li>
        <li><Link to="/reports">Reports</Link></li>
      </ul>
    </div>
  );
}