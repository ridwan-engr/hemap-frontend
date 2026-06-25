import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Sites from "./pages/Sites";
import Solar from "./pages/Solar";
import Battery from "./pages/Battery";
import Generator from "./pages/Generator";
import Grid from "./pages/Grid";
import Energy from "./pages/Energy";
import Forecast from "./pages/Forecast";
import Faults from "./pages/Faults";
import Reports from "./pages/Reports";

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