import { MissionFilter } from "components/MissionFilter";
import { withQueryClient } from "hocs/with-query-client";
import { MissionList } from "pages/MissionList";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { FilterObjectProps } from "types/props/FilterObjectProps";
import { baseURL, years } from "utils/constants";

function App() {
  const [query, setQuery] = useState({}); 

  const MissionFetch = (base: string, filter: FilterObjectProps) => {
    const url = new URL(base);
    Object.entries(filter).forEach(([key, value]) => url.searchParams.set(key, `${value}`));    

    const { isLoading, data } = useQuery("missions", () =>
      fetch(url.href)
        .then((res) => res.json())
    );
    return { isLoading, data }
  }
  
  const { isLoading, data } = MissionFetch(baseURL, query)

  return (
    <div className="container">
      <h1>SpaceX Launch Programs</h1>
      <div className="row">
        <MissionFilter years={years} setURL={setQuery} />
        <MissionList data={data} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default withQueryClient(App);
