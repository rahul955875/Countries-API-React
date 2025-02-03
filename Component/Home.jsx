
import Search from "./Search";
import FilterRegion from "./FilterRegion";
import CountriesList from "./CountriesList";
import { useContext, useState } from "react";
import  { createThemeContext } from "../Contexts/ThemeContext";


function Home() {
    let [query,setQuery] = useState('')
    const [isDark] = useContext(createThemeContext)
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
