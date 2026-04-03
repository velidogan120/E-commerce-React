import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const TanStackQueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}> {children} </QueryClientProvider>
  );
};

export default TanStackQueryProvider;
