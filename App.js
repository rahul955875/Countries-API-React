import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import Search from "./Component/Search";
import FilterRegion from "./Component/FilterRegion";
import CountriesList from "./Component/CountriesList";
import { useState } from "react";
function App() {
  let [query,setQuery] = useState('')
  // console.log(query)
  return (
    <>
      <Header />
      <div className="search-container container d-flex justify-content-between p-3 align-items-center mt-4">
        <Search setQuery={setQuery} />
        <FilterRegion />
      </div>
      <main className="w-100">
        <CountriesList query={query}  />
      </main>
    </>
  );
}

export default App;
