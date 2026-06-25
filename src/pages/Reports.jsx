import { useEffect, useState } from "react";
import api from "../api/axios";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Reports() {

  const [reports,
    setReports] =
      useState([]);

  useEffect(() => {
    api.get("/reports")
      .then((res) => {

        setReports(
          res.data.reports
        );

      });

  }, []);

  return (
    <DashboardLayout>

      <h2>Reports</h2>

      <table>

        <thead>

          <tr>
            <th>Title</th>
            <th>Site</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          {reports.map(
            report => (

            <tr key={report._id}>

              <td>
                {report.title}
              </td>

              <td>
                {report.siteId?.siteName}
              </td>

              <td>
                {report.status}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </DashboardLayout>
  );
}