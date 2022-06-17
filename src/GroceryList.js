
import "./App.css"
export default function Gitems({ item, id,remove}) {
    
    return (
      <>
        <h3>
         <span  className="task">{item}</span> 

          <button className="button-33" onClick={()=>remove(id)}>Remove </button>
        </h3>
      </>
    );
  }
  