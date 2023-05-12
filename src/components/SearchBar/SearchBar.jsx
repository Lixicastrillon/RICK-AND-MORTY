import { useState } from 'react';

 function SearchBar({onSearch}) {
   const [id, setId] = useState("");
   function handleChange (arg){
     setId(arg.target.value)
      }
   return (
      <div>
         <input type='search' onChange = {handleChange} value = {id} />
         <button onClick={()=>onSearch(id)}>Agregar</button> 
      </div>
   );
}
export default SearchBar;