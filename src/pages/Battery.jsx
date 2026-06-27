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
            <th>Battery Capacity (kWh)</th>
            <th>Battery Model</th>
            <th>Battery Type</th>
            <th>Capacity (Ah)</th>
            <th>Voltage (V)</th>
            <th>String No</th>
            <th>DOD (%)</th>
            <th>SOC (%)</th>
            
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
                {battery.BatteryCapacity}
              </td>

              <td>
                {battery.BatteryModel}
              </td>

              <td>
                {battery.BatteryType}
              </td>

              <td>
                {battery.CapacityAh}
              </td>

              <td>
                {battery.VoltageV}
              </td>

              <td>
                {battery.DOD}
              </td>

              <td>
                {battery.SOC}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </DashboardLayout>
  );
}