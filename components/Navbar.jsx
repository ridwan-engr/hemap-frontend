import { useAuth } from "../context/AuthContext";

export default function Navbar() {

  const { user, logout } =
    useAuth();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 25px",
        background: "#1e293b",
        color: "#fff"
      }}
    >
      <div>
        <h2>HEMAP Control Center</h2>
      </div>

      <div>
        <span
          style={{
            marginRight: "15px"
          }}
        >
          {user?.name || "User"}
        </span>

        <button
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}