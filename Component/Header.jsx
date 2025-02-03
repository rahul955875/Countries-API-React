import { useContext } from "react"
import  { createThemeContext } from "../Contexts/ThemeContext"


function Header() {
  const [isDark, setisDark] = useContext(createThemeContext)
  return (
    <header className={` shadow bg-color w-100 ${isDark ? 'dark' : ''}`}>
        <div className="container d-flex align-items-center justify-content-between py-3">
            <h2 className="heading"><a className="heading text-color" href="">Where in the world?</a></h2>
            <div className="page-theme fs-5 cursor p-2" onClick={()=>{
              setisDark(!isDark)
              localStorage.setItem('isDark',!isDark)
            }}>
            <i class={`fa-solid ${isDark ? 'fa-lightbulb' : 'fa-moon' } me-2 theme-icon`}></i>
            <span>{isDark ? "Light" : 'Dark'} Mode</span>
            </div>
        </div>
    </header>
  )
}

export default Header