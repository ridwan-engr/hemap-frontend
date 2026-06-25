import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from
"./pages/Login";

import Dashboard from
"./pages/Dashboard";

import Sites from
"./pages/Sites";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={
            <Login />
          }
        />

        <Route
          path="/"
          element={
            <Dashboard />
          }
        />

        <Route
          path="/sites"
          element={
            <Sites />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

console.log(
  "API URL:",
  import.meta.env.VITE_API_URL
);

export default App;