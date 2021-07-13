import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { baseURL, years } from "utils/constants";
import { FilterObjectProps } from "types/props/FilterObjectProps";
import { withQueryClient } from "hocs/with-query-client";
import { MissionFilter } from "components/MissionFilter";
import { MissionList } from "pages/MissionList";

function App() {
  const [query, setQuery] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const missionQuery = (base: string, filter: FilterObjectProps) => {
    const url = new URL(base);
    Object.entries(filter).forEach(([key, value]) => url.searchParams.set(key, `${value}`));

    return url.href
  }

  async function fetchMissions() {
    const res = await fetch(missionQuery(baseURL, query));
    setLoading(true);

    const dataFetch = await res.json();
    setLoading(false);
    setData(dataFetch);
  }

  const { refetch } = useQuery('missions', fetchMissions)

  useEffect(() => {
    refetch();
  }, [query, refetch])

  return (
    <div className="container">
      <h1>SpaceX Launch Programs</h1>
      <div className="row">
        <MissionFilter years={years} setURL={setQuery} />
        <MissionList data={data} isLoading={loading} />
      </div>
    </div>
  );
}

export default withQueryClient(App);
