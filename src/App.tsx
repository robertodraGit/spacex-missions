import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { baseURL, years } from "utils/constants";
import { FilterObjectProps } from "types/props/FilterObjectProps";
import { withQueryClient } from "hocs/with-query-client";
import { MissionFilter } from "components/MissionFilter";
import { MissionList } from "pages/MissionList";

function App() {
  const [query, setQuery] = useState<{ [key: string]: string } | null>(null);

  useEffect(() => {
    const initialQueryString = new URLSearchParams(window.location.search)
    setQuery(Object.fromEntries(initialQueryString.entries()))
  }, [])

  const missionQuery = (base: string, filter: FilterObjectProps) => {
    const url = new URL(base);
    Object.entries(filter).forEach(([key, value]) => url.searchParams.set(key, `${value}`));

    return url
  }

  const fetchMissions = async () => {
    const res = await fetch(missionQuery(baseURL, query ?? {}).href);
    const dataFetch = await res.json();

    return dataFetch
  }

  const { data = [], isLoading, refetch } = useQuery('missions', fetchMissions, {
    enabled: !!query
  })

  useEffect(() => {
    if (query === null) return
    refetch();
    window.history.pushState("", "", missionQuery(baseURL, query).search)
  }, [query, refetch])

  return (
    <div className="container">
      <h1>SpaceX Launch Programs</h1>
      <div className="row">
        <MissionFilter years={years} setURL={setQuery} currentQueries={query ?? {}} />
        <MissionList data={data} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default withQueryClient(App);
