import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="bg-blue-900 min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
