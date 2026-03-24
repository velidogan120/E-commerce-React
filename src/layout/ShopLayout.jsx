import { Outlet } from "react-router";
import Breadcrumb from "../components/shared/Breadcrumb";

const ShopLayout = () => {
  return (
    <>
      <Breadcrumb />
      <Outlet />
    </>
  );
};

export default ShopLayout;
