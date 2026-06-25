import {
  useEffect,
  useState
} from "react";

import api from "../api/axios";

import StatCard from
"../components/StatCard";

import DashboardLayout
from "../layouts/DashboardLayout";

export default function Dashboard() {

  const [stats,
    setStats] =
      useState({});

  useEffect(() => {

    async function load() {

      const sites =
        await api.get(
          "/sites"
        );

      const solar =
        await api.get(
          "/solar"
        );

      const batteries =
        await api.get(
          "/batteries"
        );

      const faults =
        await api.get(
          "/faults"
        );

      setStats({
        sites:
          sites.data.count,
        solar:
          solar.data.count,
        batteries:
          batteries.data.count,
        faults:
          faults.data.count
      });
    }

    load();

  }, []);

  return (
    <DashboardLayout>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(4,1fr)",
          gap: "20px"
        }}
      >
        <StatCard
          title="Sites"
          value={
            stats.sites
          }
        />

        <StatCard
          title="Solar"
          value={
            stats.solar
          }
        />

        <StatCard
          title="Battery"
          value={
            stats.batteries
          }
        />

        <StatCard
          title="Faults"
          value={
            stats.faults
          }
        />

      </div>

    </DashboardLayout>
  );
}