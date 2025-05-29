
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName]=useState("")
  const [price,setPrice]=useState("")
  const [result,setResult]=useState([])

  const addItem = ()=>{
    setResult([...result,`${name}-$${price}`])
    setName("")
    setPrice("");

  }

  const Remove=(indextoremove)=>{
   const updatedresult= result.filter((_, index) => index !== indextoremove);
   setResult(updatedresult)
  }

  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <label>Item name: <input type="text"  value={name} id="itemName" onChange={e=>setName(e.target.value)}></input></label>
        <label>Item price<input type="number" value={price}  id="itemPrice" onChange={e=>setPrice(e.target.value)}></input></label>
        
        <button onClick={addItem}>Add Item</button>
        <Child result={result} Remove={Remove}></Child>
    </div>
  )
}


const Child =({result,Remove}) =>{

  

  
  return(
    <div className="child">
      <h2>Child Component</h2>
      <ul>
        {
          result.map((item,index)=>(
            <li key={index}>{item}
            <button onClick={()=>Remove(index)}>Remove</button>
            </li>

          ))
        }
      </ul>
    </div>
  )
}

export default App;
