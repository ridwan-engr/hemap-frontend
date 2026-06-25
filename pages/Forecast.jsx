import { useEffect, useState } from "react";
import api from "../api/axios";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Forecast() {

  const [forecasts,
    setForecasts] =
      useState([]);

  useEffect(() => {

    api.get("/forecasts")
      .then((res) => {

        setForecasts(
          res.data.forecasts
        );

      });

  }, []);

  return (
    <DashboardLayout>

      <h2>Forecasts</h2>

      <table>

        <thead>

          <tr>
            <th>Site</th>
            <th>Type</th>
            <th>Prediction</th>
          </tr>

        </thead>

        <tbody>

          {forecasts.map(
            forecast => (

            <tr key={forecast._id}>

              <td>
                {forecast.siteId?.siteName}
              </td>

              <td>
                {forecast.forecastType}
              </td>

              <td>
                {
                  forecast.predictedValue
                }
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </DashboardLayout>
  );
}