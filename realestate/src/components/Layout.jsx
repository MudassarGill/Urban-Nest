import { Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      <main className={pathname === "/" ? "" : "pt-[72px]"}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;