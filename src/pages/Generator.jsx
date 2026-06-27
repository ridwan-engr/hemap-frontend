import { useEffect, useState } from "react";
import api from "../api/axios";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Generator() {

  const [generators,
    setGenerators] =
      useState([]);

  useEffect(() => {

    api.get("/generators")
      .then((res) => {

        setGenerators(
          res.data.generators
        );

      });

  }, []);

  return (
    <DashboardLayout>

      <h2>Generator Assets</h2>

      <table>

        <thead>
          <tr>
            <th>Site</th>
            <th>Gen Capacity (kW)</th>
            <th>Gen Model</th>
            <th>Gen Type</th>
            <th>Run Hours</th>
            <th>Gen Status</th>
            <th>Gen Engine Number</th>
          </tr>
        </thead>

        <tbody>

          {generators.map(
            gen => (

            <tr key={gen._id}>

              <td>
                {gen.siteId?.siteName}
              </td>

              <td>
                {gen.capacity}
              </td>

              <td>
                {gen.model}
              </td>

              <td>
                {gen.type}
              </td>

              <td>
                {gen.runHours}
              </td>

              <td>
                {gen.status}
              </td>

              <td>
                {gen.engineNumber}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </DashboardLayout>
  );
}