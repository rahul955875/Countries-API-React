
function Header() {
  return (
    <header className="shadow">
        <div className="container d-flex align-items-center justify-content-between py-3">
            <h2 className="heading"><a className="text-dark" href="">Where in the world?</a></h2>
            <div className="page-theme fs-5">
            <i class="fa-regular fa-moon me-2"></i>
            <span>Dark Mode</span>
            </div>
        </div>
    </header>
  )
}

export default Header