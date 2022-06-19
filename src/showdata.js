import { useEffect, useState } from "react";
import Gitems from "./list";
import "./App.css"



export default function Table(){
     
    const [allitem, new___add] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/List")
        .then((x)=>x.json())
        .then((x)=>new___add(x))
      },[allitem])
      const remove = (i_n) => {
        console.log(allitem[i_n]);
        fetch(`http://localhost:3000/List/${i_n}`,{
          method:"DELETE",
          
          headers:{
            "Content-Type":"application/json"
          }
        })
    
        
      };


      return(
        <>
        <h3>
          <table>
   
   <tr> <td>Sr No.</td><td>Name</td><td>Age</td>
   <td>Status</td>
   <td>DELETE </td>
   </tr>
</table>
</h3>
          {allitem.map((x, i) => {
        return <Gitems item={x} id={x.id}  key={i}  remove={remove}/>;
      })}
        
        </>
      )
      
 }