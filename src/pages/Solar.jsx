import { useEffect, useState } from "react";
import api from "../api/axios";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Solar() {

  const [solar, setSolar] =
    useState([]);

  useEffect(() => {

    loadSolar();

  }, []);

  async function loadSolar() {

    const res =
      await api.get("/solar");

    setSolar(res.data.solar);
  }

  return (
    <DashboardLayout>

      <h2>Solar Plants</h2>

      <table>

        <thead>
          <tr>
            <th>Site</th>
            <th>Capacity</th>
            <th>Model</th>
            <th>Panel Type</th>
            <th>Panel Count</th>
            <th>Panel Area</th>
            <th>Panel Efficiency</th>
            <th>Irradiance</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {solar.map(item => (

            <tr key={item._id}>
              <td>
                {item.siteId?.siteName}
              </td>

              <td>
                {item.capacity}
              </td>

              <td>
                {item.model}
              </td>

              <td>
                {item.panelType}
              </td>

              <td>
                {item.panelCount}
              </td>

              <td>
                {item.panelArea}
              </td>

              <td>
                {item.panelEfficiency}
              </td>

              <td>
                {item.irradiance}
              </td>

              <td>
                {item.status}
              </td>
            </tr>

          ))}

        </tbody>

      </table>

    </DashboardLayout>
  );
}