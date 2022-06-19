
import "./App.css"
export default function Gitems({ item, id,remove,key}) {
    
    return (

      <>
        <h3>
        <table>
   
   <tr> <td>{id}</td><td>{item.name}</td><td>{item.age}</td>
   <td>{item.married?"Married":"Single"}</td>
   <td><button className="button-33" onClick={()=>remove(id)}>Remove </button>
        </td>
   </tr>
</table> 

          </h3>
      </>
    );
  }
  