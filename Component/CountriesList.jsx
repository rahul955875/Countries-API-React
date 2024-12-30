import allCountrisData from "../allCountrisData";
import CountryCard from "./CountryCard";
function CountriesList({ query }) {
  // console.log(query)
  return (
    <div
      className="countriesList row row-cols-lg-4 m-auto
p-2 g-5"
    >
      {allCountrisData
        .filter((country) => country.name.common.toLowerCase().includes(query))
        .map((country) => {
          return (
            <CountryCard
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              capital={country.capital?.[0]}
              region={country.region}
              key={country.name.common}
            />
          );
        })}
    </div>
  );
}

export default CountriesList;
