import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/dashboard/index.jsx";
import Layout from "./pages/dashboard/login/components/layout/Layout.jsx";
import CreateUser from "./pages/dashboard/users/create/Create.jsx";
import DashboardLogin from "./pages/Dashboard/login/DashoardLogin.jsx";
import EditUser from "./pages/dashboard/users/edit/Edit.jsx";

const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="users/create" element={<CreateUser />} />
        <Route path="users/edit/:userId" element={<EditUser />} />
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
