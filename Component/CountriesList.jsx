import allCountrisData from "../allCountrisData"
import CountryCard from "./CountryCard"
function CountriesList() {
  return (
    <div className="countriesList row row-cols-lg-4 m-auto
p-2 g-5">
        {allCountrisData.map((country)=>{
        return <CountryCard name={country.name.common} flag={country.flags.svg} population={country.population} capital={country.capital?.[0]} region={country.region} key={country.name.common} />
    })}
    </div>
  )
}

export default CountriesList