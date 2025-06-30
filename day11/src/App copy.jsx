import { useEffect, useState } from 'react'

import './App.css'

const App=()=>{
  // const getData=()=>{
  //   const response=fetch("https://dummyjson.com/users")//1) is anything pending 2) is call stack is empty
  //   console.log(response)
  //   response.then((resp)=>{
  //     console.log("success",resp);
  //     return resp.json()
  //   }).catch((err)=>{
  //     console.log("error",err.message);
  //   }).then((data)=>{
  //     console.log("data",data)
  //   })
  // };
  
  const [usersList,setUsersList]=useState([])
  // console.log(usersList);
  const getData = async()=>{ // infinite callback function or infinite re-rendersw because of logic
    console.log("inside data!")
    const response=await fetch("https://dummyjson.com/users")
    const data = await response.json();
    console.log("data-->>",data)
    const {users}=data
    setUsersList(users);
  }
  console.log("-- before getdata call--")
  // getData() / I want to call this getData() for 1 time but it calls infinite times
  console.log("getData");
  useEffect(()=>{
    getData(); //it calls one time called after return
  },[])//empty dependency array
  //--> callback function will be called only ones (on First render / initial render)
  return (
    <div>
      <h1>Hello</h1>
      {
        usersList.map((elem,ind)=>
            <div key={ind}>
              <h3>{elem.firstName}</h3>
            </div>
          )
      }
    </div>
  )
}

export default App
