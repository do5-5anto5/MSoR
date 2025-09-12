import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import DashboardLogin from "./pages/Dashboard/Login/index.jsx";

const browserRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/dashboard'>
    <Route path='login' element={<DashboardLogin />} />
  </Route>
))

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={browserRouter}/>
  </StrictMode>
);
