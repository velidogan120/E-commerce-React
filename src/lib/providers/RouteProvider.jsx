import { BrowserRouter } from "react-router";

const RouteProvider = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default RouteProvider;
