import { CardWrapper } from "pages/CardWrapper";
import { QueryClient, QueryClientProvider } from "react-query";

const baseURL = 'https://api.spacexdata.com/v3/launches?limit=100';
const queryClient = new QueryClient();

function App() {
  return (
    <div className="container-fluid">
      <h1>SpaceX Launch Programs</h1>
      <aside className="filter-column">

      </aside>
      <aside className="card-wrapper">
        <QueryClientProvider client={queryClient}>
          <CardWrapper toFetch={baseURL} />
        </QueryClientProvider>
      </aside>
    </div>
  );
}

export default App;
