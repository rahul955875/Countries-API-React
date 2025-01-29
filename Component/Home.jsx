
import Search from "./Search";
import FilterRegion from "./FilterRegion";
import CountriesList from "./CountriesList";
import { useState } from "react";


function Home() {
    let [query,setQuery] = useState('')
  // console.log(query)
  return (
    <>
      <div className="search-container container  d-flex justify-content-between p-2 p-md-3 align-items-center mt-4">
        <Search setQuery={setQuery} />
        <FilterRegion setQuery={setQuery} />
      </div>
      <main className="w-100">
        <CountriesList query={query} />
      </main>
    </>
  );
}

export default Home;
