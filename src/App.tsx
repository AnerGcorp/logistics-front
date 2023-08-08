import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./pages/HomePage";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <HomePage />
    </QueryClientProvider>
  );
}

export default App;
