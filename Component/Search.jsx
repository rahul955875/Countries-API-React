
function Search() {
  return (
    <div className="seach d-flex align-items-center position-relative shadow">
        <i className="fa-solid fa-magnifying-glass fs-4 position-absolute  icon "></i>
        <input type="search" className="fs-5 px-2 ps-5 py-2 search-input border border-primary rounded "  placeholder="Seach for country..." />
    </div>
  )
}

export default Search