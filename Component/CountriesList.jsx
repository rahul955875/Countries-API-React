import allCountrisDataFromLocal from "../allCountrisData";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesListSimmerEff from "./CountriesListSimmerEff";

function CountriesList({ query }) {
  const [allCountrisData, setallcountriesData] = useState([]);
  useEffect(() => {
    if(JSON.parse(localStorage.getItem('countryData'))){
      setallcountriesData(JSON.parse(localStorage.getItem('countryData')))
      console.log('this form local storage')
    return  
    }
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setallcountriesData(data);
        
        console.log("this is fetch form server");
      })
      .catch((e) => {
        setallcountriesData(allCountrisDataFromLocal);
        localStorage.setItem('countryData',JSON.stringify(allCountrisDataFromLocal))
        console.log("this data is form local");
      });
  }, []);

  return (
    !allCountrisData.length ? <CountriesListSimmerEff /> :
    <div
      className="countriesList row row-cols-lg-4 m-auto
p-5 g-5"
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
              data={country}
            />
          );
        })}
    </div>
  );
}

export default CountriesList;
