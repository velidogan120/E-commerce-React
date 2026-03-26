import { Route, Routes } from "react-router";
import HomePage from "../../pages/HomePage";
import MainLayout from "../../layout/MainLayout";
import ShopLayout from "../../layout/ShopLayout";
import ShopPage from "../../pages/ShopPage";
import ProductPage from "../../pages/ProductPage";
import AboutPage from "../../pages/AboutPage";
import PricePage from "../../pages/PricePage";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/shop" element={<ShopLayout />}>
          <Route index element={<ShopPage />} />
          <Route path=":id" element={<ProductPage />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/price" element={<PricePage />} />
      </Route>
    </Routes>
  );
};

export default Router;
