import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Layout() {
  return (
    <>
      <Sidebar />
      <main className="ml-60 py-7.5">
        <Outlet />
      </main>
    </>
  );
}
