import "./Navbar.css"
import { SearchBox } from "./SearchBox"
const Navbar=()=>{
    return(
        <div className="navbar-container">
            <a>Home</a>
            <a>Search</a>
            <a>Help</a>
            <SearchBox/>
        </div>
    )
}

export{
    Navbar
}