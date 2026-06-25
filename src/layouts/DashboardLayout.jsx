import Sidebar from
"../components/Sidebar.jsx";

import Navbar from
"../components/Navbar.jsx";

export default function DashboardLayout({
  children
}) {

  return (
    <div
      style={{
        display: "flex"
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1
        }}
      >
        <Navbar />

        <div
          style={{
            padding: "20px"
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}