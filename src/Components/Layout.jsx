import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div>
      <Header />

      <div className="main--body">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
