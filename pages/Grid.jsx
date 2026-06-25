import { useEffect, useState } from "react";
import api from "../api/axios";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Grid() {

  const [grids,
    setGrids] =
      useState([]);

  const [status,
    setStatus] =
      useState({});

  useEffect(() => {

    loadGrid();

  }, []);

  async function loadGrid() {

    const gridRes =
      await api.get("/grid");

    const statusRes =
      await api.get(
        "/grid/status"
      );

    setGrids(
      gridRes.data.grids
    );

    setStatus(
      statusRes.data
    );
  }

  return (
    <DashboardLayout>

      <h2>Grid Monitoring</h2>

      <h3>
        Availability:
        {status.availability}%
      </h3>

      <h3>
        Outages:
        {status.outages}
      </h3>

      <table>

        <thead>
          <tr>
            <th>Site</th>
            <th>Voltage</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {grids.map(grid => (

            <tr key={grid._id}>

              <td>
                {grid.siteId?.siteName}
              </td>

              <td>
                {grid.voltage}
              </td>

              <td>
                {grid.outageStatus
                  ? "Outage"
                  : "Available"}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </DashboardLayout>
  );
}