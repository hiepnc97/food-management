import "./App.scss";
import SearchInput from "@/components/commons/SearchInput";
import Tab from "./components/commons/Tab";
import Container from "./components/commons/Container";
import Cards from "./components/contents/Cards";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { FoodsManageProvider } from "./contexts/FoodsManageContext";

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            networkMode: "always",
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <FoodsManageProvider>
        <div className="app">
          <Container>
            <SearchInput />
            <Tab />
            <Cards />
          </Container>
        </div>
      </FoodsManageProvider>
    </QueryClientProvider>
  );
}

export default App;
