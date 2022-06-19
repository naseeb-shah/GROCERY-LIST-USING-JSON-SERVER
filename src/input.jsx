import { useEffect, useState } from "react";

import "./App.css"

import Table from "./showdata";
export default function Grocery() {
  const [name,sname ] = useState("");
  const [age ,sage ] = useState("");
  const [dd,sadd ] = useState("");
  const [sal,ssal ] = useState("");
  const [married,sm ] = useState(false);
  const [dis,sds ] = useState("none");
  
  
  const add = () => {
    if(name==""||age==''||dd==''||sal=='')
    return



   let  obj=  {
      
      "name":name,
      "age":age,
      "add":dd,
      "salary":sal,
      "married":married

      
    }
    console.log(obj)

    fetch("http://localhost:3000/List",{
      method:"POST",
      body:JSON.stringify(obj),
      headers:{
        "Content-Type":"application/json"
      }
    })
ssal("")
sage("")
sadd("")
ssal("")
sname('')
  
    
  
  };

 

  return (

    <> 
    <button className="button-30" onClick={()=>dis=="none"?sds("block"):sds("none")}>{dis=="none"?"Add Empolye":"Show Empolye"}</button>
    
    <div className="main" style={{display:dis}}>
      <h1>Regstration</h1>
    <h1>Name</h1>
      <input
      placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => sname(e.target.value)}
      />
      <h1>Age</h1>
       <input
       placeholder="Age"
        type="number"
        value={age}
        onChange={(e) => sage(e.target.value)}
      />
      <h1>Address:</h1>
      <input
        type="text"
        value={dd}
        onChange={(e) => sadd(e.target.value)}
      />
      <h1>Salary</h1>
       <input
        type="number"
        value={sal}
        onChange={(e) => ssal(e.target.value)}
      />     
      <h1>Mark if married</h1> 
      <input
        type="checkbox"
        checked={married}
        onChange={() => married?sm(false):sm(true)}
      />   
<br/>
      <button className="button-30" onClick={add}>Add Employe</button>
       

      </div>
      <div style={{diplay:dis=="none"?"block":"none"}}>
      <Table />
      </div>
    </>
  );
}
