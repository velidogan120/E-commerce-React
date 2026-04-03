import ReduxProvider from "./ReduxProvider";
import RouteProvider from "./RouteProvider";
import TanStackQueryProvider from "./TanStackQueryProvider";

const Providers = ({ children }) => {
  return (
    <TanStackQueryProvider>
      <ReduxProvider>
        <RouteProvider>{children}</RouteProvider>
      </ReduxProvider>
    </TanStackQueryProvider>
  );
};

export default Providers;
