import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import InfoPanel from "../components/InfoPanel";
import NavBar from "../components/NavBar";
import ToTop from "../components/ToTop";

const Layout = () => {
  return (
    <>
      <InfoPanel />
      <NavBar />
      <div className="container-xxl bg-white p-0">
        <Outlet />
        <Footer />
        <ToTop />
      </div>
    </>
  );
};

export default Layout;
