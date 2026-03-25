import { Outlet } from "react-router";
import Breadcrumb from "../components/shared/Breadcrumb";
import Brands from "../components/Brands";

const ShopLayout = () => {
  return (
    <>
      <Breadcrumb />
      <main>
        <Outlet />
      </main>
      <Brands />
    </>
  );
};

export default ShopLayout;
