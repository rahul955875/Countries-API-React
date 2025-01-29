

function FilterRegion({setQuery}) {
  return (
    <div>
      <select name="filter-region" className="px-3 py-2 rounded fs-6  border-primary shadow bg-color text-color filter-region-field" onChange={(e)=> setQuery(e.target.value.toLowerCase())}>
          <option value="">Filter by region</option>
          <option value="Asia">Asia</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
        </select>
    </div>
  )
}

export default FilterRegion