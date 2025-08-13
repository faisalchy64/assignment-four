import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Main() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
