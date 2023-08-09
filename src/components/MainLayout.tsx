import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

const MainLayout = () => (
  <>
    <Navbar />
    <div className="min-h-screen p-10 bg-gradient-to-r from-black via-cyan-900 to-black">
      <Outlet />
    </div>
  </>
);

export { MainLayout };
