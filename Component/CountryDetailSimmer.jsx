import React from 'react'
import './CountryD.css'
function CountryDetailSimmer() {
  return (
    <main>
      <div className="country-details-container">
        <span className="back-button">
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <div className='shimmerImg'></div>
          <div className="details-text-container">
            <h1>Country Name</h1>
            <div className="details-text">
              <p>
                <b>Native Name: Native name</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: 0,00,000
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: region</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: london</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: domain</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: doller</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: english</b>
                <span className="languages"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}

export default CountryDetailSimmer