import React from "react";
import './css/shimmer.css'
function CountriesListSimmerEff() {
  return (
    <>
      <div
        className="countriesList row row-cols-lg-4 m-auto
        p-5 g-5"
      >
        {Array.from({ length: 16 }).map((el) => (
          <div className="col " >
            <div
              className="card shadow shimmer-card"
              style={{ height: 350, background: "#ccc", minWidth: 250 }}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CountriesListSimmerEff;
