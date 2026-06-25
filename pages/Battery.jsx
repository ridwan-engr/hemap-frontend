import { useEffect, useState } from "react";
import api from "../api/axios";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Battery() {

  const [batteries,
    setBatteries] =
      useState([]);

  useEffect(() => {

    api.get("/batteries")
      .then((res) => {

        setBatteries(
          res.data.batteries
        );

      });

  }, []);

  return (
    <DashboardLayout>

      <h2>Battery Monitoring</h2>

      <table>

        <thead>
          <tr>
            <th>Site</th>
            <th>SOC (%)</th>
            <th>Voltage</th>
          </tr>
        </thead>

        <tbody>

          {batteries.map(
            battery => (

            <tr key={battery._id}>

              <td>
                {battery.siteId?.siteName}
              </td>

              <td>
                {battery.soc}
              </td>

              <td>
                {battery.voltage}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </DashboardLayout>
  );
}