import { Outlet } from "react-router-dom";
import Header from "./header/Header";

export default function BaseLayout() {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
}
