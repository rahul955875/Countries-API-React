import React from 'react'

function CountryDetail() {
    const CountryName = new URLSearchParams(location.search).get('name')
    console.log(CountryName)
  return (
    <div>
    </div>
  )
}

export default CountryDetail