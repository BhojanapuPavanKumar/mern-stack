import { useState } from 'react'
import './App.css'

const App=()=>{
  const [userarr,remote]=useState([]);
  // const [username,namestate]=useState("");
  // const [usercity,citystate]=useState("");
  // const handleName=(e)=>{
  //   const val=e.target.value;
  //   namestate(val);
  // }
  // const handleCity=(e)=>{
  //   const val=e.target.value;
  //   citystate(val);
  // }
  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   remote((prev)=>[...prev,{name:username,city:usercity}])
  // }

  // secound way
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(e.target[0].value,e.target.username.value)
    // console.log(e.target[1].value,e.target.city.value)
    const username=e.target.username.value;
    const city=e.target.city.value;
    remote((prev)=>[...prev,{username,city}]);
  }
  const handleDelete=(e)=>{
    e.preventDefault();
    const username=e.target.username.value;
    remote((prev)=>prev.filter((elem)=>(elem.username!=username)))
  }
  const handleDelete1=(ind)=>{
      remote((prev)=>prev.filter((_,ind1)=>(ind!=ind1)))
      // remote((prev)=>prev.splice(ind,1))
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Name' name='username'/>
        <input type='text' placeholder='Enter City' name='city'/>
        <button>Submit</button>
      </form>
      {userarr.map((elem,ind)=>(
        <div key={ind}>
        <p>Name: {elem.username} City: {elem.city}<button onClick={()=>{
          handleDelete1(ind);
        }}>Delete</button></p>
        </div>
      ))}
      <form onSubmit={handleDelete}>
        <input type='text' placeholder='Enter name to delete' name='username'/>
        <button >Delete</button>
      </form>
    </div>
  );
};

export default App