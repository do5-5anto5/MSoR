import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import DashboardLogin from "./pages/Dashboard/login/DashoardLogin.jsx";
import Categories from "./pages/dashboard/categories/Categories.jsx";
import CreateCategory from "./pages/dashboard/categories/create/Create.jsx";
import EditCategory from "./pages/dashboard/categories/edit/Edit.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Layout from "./pages/dashboard/login/components/layout/Layout.jsx";
import Products from "./pages/dashboard/products/Products.jsx";
import CreateProduct from "./pages/dashboard/products/create/Create.jsx";
import EditProduct from "./pages/dashboard/products/edit/Edit.jsx";
import CreateUser from "./pages/dashboard/users/create/Create.jsx";
import EditUser from "./pages/dashboard/users/edit/Edit.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";

const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="users/create" element={<CreateUser />} />
        <Route path="users/edit/:userId" element={<EditUser />} />
        <Route path="products" element={<Products />} />
        <Route path="products/create" element={<CreateProduct />} />
        <Route path="products/edit/:productId" element={<EditProduct />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/create" element={<CreateCategory />} />
        <Route path="categories/edit/:categoryId" element={<EditCategory />} />
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
