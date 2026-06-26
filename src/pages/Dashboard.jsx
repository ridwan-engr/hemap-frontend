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

      try {

        const [
          sites,
          solar,
          batteries,
          faults
        ] = await Promise.all([
          api.get("/sites"),
          api.get("/solar"),
          api.get("/batteries"),
          api.get("/faults")
        ]);

        setStats({
          sites: sites.data.sites?.length || 0,
          solar: solar.data.solar?.length || 0,
          batteries: batteries.data.batteries?.length || 0,
          faults: faults.data.faults?.length || 0
        });

      } catch (error) {

        console.error(error);

      }

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