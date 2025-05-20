import './searchBar.css'
import { useState } from "react";


function SearchBar() {
 
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then ((json) => {
      console.log(json);
    } );
  }
 const handleChange = (value) => {
  setInput(value)
  fetchData(value)
 }
  return (
  
  <div className="search-bar">
     <input
        type="text"
        placeholder= " &#9903; Search an item | Ex: My Cat"
        value={input}
        onChange={(e) => handleChange(e.target.value)} 
          />  
      
       </div>

  );
}

export default SearchBar;