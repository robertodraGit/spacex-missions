import { MissionFilter } from "components/MissionFilter";
import { withQueryClient } from "hocs/with-query-client";
import { MissionList } from "pages/MissionList";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { baseURL, years } from "utils/constants";

function App() {
  const [toFetch, setToFetch] = useState(baseURL);

  const setURLHandler = (string: string) => {    
    setToFetch((prev) => prev + string)
  }

  const URL = new URLSearchParams(baseURL)

  const filters = {page: 2, year: 2012}

  Object.entries(filters).forEach(([key, value]) => URL.set(key, `${value}`))
  console.log(URL.toString());
  

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

export default withQueryClient(App);
