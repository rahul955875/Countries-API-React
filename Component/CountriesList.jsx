// import allCountrisData from "../allCountrisData";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";


function CountriesList({ query }) {
  const[allCountrisData,setallcountriesData] =useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => setallcountriesData(data))
    .catch(() =>{ console.log("this is an error")});
  },[]);
  
  return (
    <div
      className="countriesList row row-cols-lg-4 m-auto
p-4 g-5"
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
