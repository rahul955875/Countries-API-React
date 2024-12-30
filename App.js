import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import Search from "./Component/Search";
import FilterRegion from "./Component/FilterRegion";
import CountriesList from "./Component/CountriesList";
function App() {
  return (
    <>
      <Header />
      <div className="search-container container d-flex justify-content-between p-3 align-items-center mt-4">
        <Search />
        <FilterRegion />
      </div>
      <main className="w-100">
        <CountriesList />
      </main>
    </>
  );
}

export default App;
