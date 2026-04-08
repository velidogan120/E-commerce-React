import { Route, Routes } from "react-router";
import HomePage from "../../pages/HomePage";
import MainLayout from "../../layout/MainLayout";
import ShopLayout from "../../layout/ShopLayout";
import ShopPage from "../../pages/ShopPage";
import ProductPage from "../../pages/ProductPage";
import AboutPage from "../../pages/AboutPage";
import PricePage from "../../pages/PricePage";
import TeamPage from "../../pages/TeamPage";
import ContactPage from "../../pages/ContactPage";
import SignUpPage from "../../pages/SignUpPage";
import LoginPage from "../../pages/LoginPage";
import ShoppingCartPage from "../../pages/ShoppingCartPage";
import Order from "../../components/Order";
import ProtectedRoutes from "./ProtectedRoutes";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="shop/:gender?/:categoryName?/:categoryId?"
          element={<ShopLayout />}
        >
          <Route index element={<ShopPage />} />
          <Route path=":productNameSlug/:productId" element={<ProductPage />} />
        </Route>
        <Route path="about" element={<AboutPage />} />
        <Route path="price" element={<PricePage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="shopping-cart" element={<ShoppingCartPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="order" element={<Order />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
