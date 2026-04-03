import { Outlet } from "react-router";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
const MainLayout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "calc(100vh - 676px)" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
