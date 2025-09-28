import { Outlet } from "react-router-dom";
import Header from "./header/Header";

export default function BaseLayout() {
  return (
    <div className="custom-container">
      <Header />
      <Outlet/>
    </div>
  );
}
