import { useEffect, useState } from "react";
import Gitems from "./GroceryList";
import "./App.css"
export default function Grocery() {
  const [itemn, itemname] = useState("");
  
  const [allitem, new___add] = useState([]);
useEffect(()=>{
  fetch("http://localhost:3000/List")
  .then((x)=>x.json())
  .then((x)=>new___add(x))
},[])
  const add = () => {
    if(itemn=="")
    return
   let  obj=  {
      
      "task": itemn,
      
    }

    fetch("http://localhost:3000/List",{
      method:"POST",
      body:JSON.stringify(obj),
      headers:{
        "Content-Type":"application/json"
      }
    })

    new___add([...allitem,itemn]);
    
    itemname("");
  };

  const remove = (i_n) => {
    console.log(allitem[i_n]);
    fetch(`http://localhost:3000/List/${i_n}`,{
      method:"DELETE",
      
      headers:{
        "Content-Type":"application/json"
      }
    })

    
  };

  return (
    <> <div className="main">
      <h1>Grocery_List</h1>
      <input
        type="text"
        value={itemn}
        onChange={(e) => itemname(e.target.value)}
      />
      <button className="button-30" onClick={add}>Add Item</button>
       {allitem.map((x, i) => {
        return <Gitems item={x.task} id={x.id}  key={i} remove={remove} />;
      })}  

      </div>
    </>
  );
}
