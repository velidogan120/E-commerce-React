import { Route, Routes } from "react-router";
import MainLayout from "../../layout/MainLayout";
import ShopLayout from "../../layout/ShopLayout";
import AboutPage from "../../pages/AboutPage";
import ContactPage from "../../pages/ContactPage";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import OrderPage from "../../pages/OrderPage";
import PreviousOrdersPage from "../../pages/PreviousOrdersPage";
import PricePage from "../../pages/PricePage";
import ProductPage from "../../pages/ProductPage";
import ShopPage from "../../pages/ShopPage";
import ShoppingCartPage from "../../pages/ShoppingCartPage";
import SignUpPage from "../../pages/SignUpPage";
import TeamPage from "../../pages/TeamPage";
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
          <Route path="order" element={<OrderPage />} />
          <Route path="previous-order" element={<PreviousOrdersPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
