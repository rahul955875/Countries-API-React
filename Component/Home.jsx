
import Search from "./Search";
import FilterRegion from "./FilterRegion";
import CountriesList from "./CountriesList";
import {useState } from "react";
import { useTheme } from "../hooks/useTheme";



function Home() {
    let [query,setQuery] = useState('')
    const [isDark] = useTheme()
  // console.log(query)
  return (
    <>
      <main className={`w-100 ${isDark ? 'dark' : ''}`}>
      <div className="search-container container  d-flex justify-content-between p-2 p-md-3 align-items-center mt-4">
        <Search setQuery={setQuery} />
        <FilterRegion setQuery={setQuery} />
      </div>
        <CountriesList query={query} />
      </main>
    </>
  );
}

export default Home;
