// 1---> 0.25 rem --> 4px
// 4---> 1 rem  -->16px
import { useState } from 'react';
import {useNavigate} from 'react-router';
const Navbar=()=>{
    const [searchText,setSearchText]=useState("");
    let navigate = useNavigate();
const handleSearch=()=>{
    navigate(`/search?text=${searchText}`)
}

    return (
        <nav className="flex px-6 py-4 justify-between bg-emerald-200" >
            <p>MY app</p>
            <div>
                <input type="text" placeholder="Type something..." className="px-2 py-1 border-1 border-amber-800 rounded-lg mr-2"
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}
                />
                <button className="px-2 py-1 border-1 border-amber-800 rounded-lg bg-amber-600 text-white cursor-pointer" 
                    onClick={handleSearch}
                >Search</button>
            </div>
            <div className="h-8 w-8 bg-blue-600 rounded-full"></div>
        </nav>
    )
}

export{ Navbar}