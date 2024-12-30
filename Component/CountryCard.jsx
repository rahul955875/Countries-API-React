function CountryCard({name,flag,population,capital,region}) {
  return (
    <a href="" className="country-card col justify-self-center">
      <div className="card shadow-lg">
        <img src={flag} className="card-img-top shadow img-fluid" alt="" style={{width:'100%',height:'200px',objectFit:'cover'}}/>
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Population:</b> {population.toLocaleString('en-IN')}
          </p>
          <p>
            <b>Region: </b> {region}
          </p>
          <p>
            <b>Capital: </b> {capital}
          </p>
        </div>
      </div>
    </a>
  );
}

export default CountryCard;
