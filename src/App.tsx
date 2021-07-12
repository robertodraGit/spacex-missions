import { MissionList } from "pages/MissionList";
import { useState } from "react";
import { useQuery } from "react-query";
import { baseURL, years } from "utils/constants";

function App() {
  const [toFetch, setToFetch] = useState(baseURL);

  const { isLoading, data } = useQuery("missions", () =>
    fetch(toFetch)
      .then((res) => res.json())
  );

  return (
    <div className="container">
      <h1>SpaceX Launch Programs</h1>
      <div className="row">
        <aside className="filter-column col-3">
          <h1>Filter Space</h1>
        </aside>
        <MissionList data={data} isLoading={isLoading} />
      </div>
    </div>
  );
}

// export default withQueryClient(App);
export default App
