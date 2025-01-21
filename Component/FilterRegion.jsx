

function FilterRegion() {
  return (
    <div>
      <select name="filter-region" className="px-3 py-2 rounded fs-6  border-primary shadow bg-color text-color filter-region-field">
          <option value="Select-region">Filter by region</option>
          <option value="Asia">Asia</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
          <option value="South Africa">South Africa</option>
          <option value="North Africa">North Africa</option>
        </select>
    </div>
  )
}

export default FilterRegion