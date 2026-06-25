import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Sites from "./pages/Sites.jsx";
import Solar from "./pages/Solar.jsx";
import Battery from "./pages/Battery.jsx";
import Generator from "./pages/Generator.jsx";
import Grid from "./pages/Grid.jsx";
import Energy from "./pages/Energy.jsx";
import Forecast from "./pages/Forecast.jsx";
import Faults from "./pages/Faults.jsx";
import Reports from "./pages/Reports.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sites" element={<Sites />} />
        <Route path="/solar" element={<Solar />} />
        <Route path="/battery" element={<Battery />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/faults" element={<Faults />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;