import "./SearchBox.css"
import { useState } from "react";
//rerendering --> re-run the function
//component is re-rendered only when the state change OR props change
//state variables are the state variable change --> state of the component has changed

// function--> component
// arguments-->props
// const [monitor,remote]=useState()

const SearchBox=()=>{

   const [tt,se] = useState(""); // state variable
   const [tt1,se1] = useState("");

    function handleSearch(e) {
        se(e.target.value); // update state
        se1(e.target.value);
    }
    function handleSearchWord(){

    }
    return (
        <div className="Search-Box">
            <button onClick={handleSearchWord}>Search</button>
            <input type="text" onKeyUp={handleSearch}/>
            <h1>{tt}</h1>
            <h2>{tt1}</h2>
        </div>
    )
}

export{
    SearchBox
}