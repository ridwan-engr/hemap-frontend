import { useEffect, useState } from "react";
import api from "../api/axios";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Energy() {

  const [records,
    setRecords] =
      useState([]);

  useEffect(() => {

    api.get("/energy")
      .then((res) => {

        setRecords(
          res.data.records
        );

      });

  }, []);

  return (
    <DashboardLayout>

      <h2>Energy Records</h2>

      <table>

        <thead>

          <tr>
            <th>Site</th>
            <th>Load</th>
            <th>Solar</th>
            <th>Battery</th>
          </tr>

        </thead>

        <tbody>

          {records.map(
            record => (

            <tr key={record._id}>

              <td>
                {record.siteId?.siteName}
              </td>

              <td>
                {record.loadDemand}
              </td>

              <td>
                {record.solarGeneration}
              </td>

              <td>
                {record.batteryContribution}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </DashboardLayout>
  );
}