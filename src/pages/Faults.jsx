import { useEffect, useState } from "react";
import api from "../api/axios";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Faults() {

  const [faults,
    setFaults] =
      useState([]);

  useEffect(() => {

    loadFaults();

  }, []);

  async function loadFaults() {

    const res =
      await api.get("/faults");

    setFaults(
      res.data.faults
    );
  }

  async function resolveFault(
    id
  ) {

    await api.patch(
      `/faults/resolve/${id}`
    );

    loadFaults();
  }

  return (
    <DashboardLayout>

      <h2>Fault Management</h2>

      <table>

        <thead>

          <tr>
            <th>Site</th>
            <th>Fault</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {faults.map(
            fault => (

            <tr key={fault._id}>

              <td>
                {fault.siteId?.siteName}
              </td>

              <td>
                {fault.faultType}
              </td>

              <td>
                {fault.status}
              </td>

              <td>

                <button
                  onClick={() =>
                    resolveFault(
                      fault._id
                    )
                  }
                >
                  Resolve
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </DashboardLayout>
  );
}