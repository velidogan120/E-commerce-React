import "./App.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/shared/Header";
import PageFlag from "./components/PageFlag";
import Brands from "./components/Brands";
import FeaturedCards from "./components/FeaturedCards";
import FeaturedProducts from "./components/FeaturedProducts";
import FeaturedProductsInfo from "./components/FeaturedProductsInfo";
import BestServices from "./components/BestServices";
import FeaturedPosts from "./components/FeaturedPosts";
function App() {
  return (
    <>
      <Header />
      <PageFlag />
      <Brands />
      <FeaturedCards />
      <FeaturedProducts />
      <FeaturedProductsInfo />
      <BestServices />
      <FeaturedPosts />
      <ToastContainer />
    </>
  );
}

export default App;
