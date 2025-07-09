import { Link } from "react-router"

const Navbar = ()=>{

    return(
        <header className="flex justify-between px-4 py-6 bg-black text-white">
            <div className="font-bold text-emerald-600 text-3xl">Shopping App</div>
            <div className="flex gap-2">
                <input type="text" className="b-1 px-2 py-1 rounded-md bg-amber-50 h-10 w-160 border-1 text-black"/>
                <button className="b-1 px-2 py-1 rounded-md bg-amber-100 text-1xl text-blue-700 font-bold">Search</button>
            </div>        
            <div className="flex gap-3 text-2xl">
                <Link to="/profile-Page">Profile</Link>
                <Link to="/signup-page">SignUp</Link>
            </div>
        </header>
    )
}

export {Navbar}