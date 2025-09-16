import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard/index.jsx";
import Layout from "./pages/Dashboard/Login/components/Layout/Layout.jsx";
import DashboardLogin from "./pages/Dashboard/Login/DashoardLogin.jsx";

const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={null} />
        <Route path="categories" element={null} />
      </Route>
      <Route path="/dashboard/login" element={<DashboardLogin />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={browserRouter} />
  </StrictMode>
);
