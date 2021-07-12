import { MissionFilter } from "components/MissionFilter";
import { MissionList } from "pages/MissionList";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { baseURL, years } from "utils/constants";

function App() {
  const [toFetch, setToFetch] = useState(baseURL);

  const setURLHandler = (string: string) => {    
    setToFetch((prev) => prev + string)
  }

  const { isLoading, data } = useQuery("missions", () =>
    fetch(toFetch)
      .then((res) => res.json())
  );

  return (
    <div className="container">
      <h1>SpaceX Launch Programs</h1>
      <div className="row">
        <MissionFilter baseURL={toFetch} years={years} setURL={setURLHandler} />
        <MissionList data={data} isLoading={isLoading} />
      </div>
    </div>
  );
}

// export default withQueryClient(App);
export default App
