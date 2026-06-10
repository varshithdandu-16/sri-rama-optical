import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import AnnouncementBar from "../components/navbar/AnnouncementBar";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", position: "relative" }}>
      <AnnouncementBar />
      <Navbar />
      <main
        style={{ flex: 1 }}
        id="main-content"
        role="main"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;