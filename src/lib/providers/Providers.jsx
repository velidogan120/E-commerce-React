import ReduxProvider from "./ReduxProvider";
import RouteProvider from "./RouteProvider";

const Providers = ({ children }) => {
  return (
    <ReduxProvider>
      <RouteProvider>{children}</RouteProvider>
    </ReduxProvider>
  );
};

export default Providers;
