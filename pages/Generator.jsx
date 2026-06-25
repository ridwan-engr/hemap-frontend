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
            <th>Runtime</th>
            <th>Fuel</th>
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
                {gen.runtime}
              </td>

              <td>
                {gen.fuelLevel}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </DashboardLayout>
  );
}