import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../Common";

export const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
