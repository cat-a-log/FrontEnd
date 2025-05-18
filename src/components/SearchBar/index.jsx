import './searchBar.css'


function SearchBar() {
  return (
  
  <div className="search-bar">
     <input
        type="text"
        placeholder= " &#9903; Search an item | Ex: Cat"
        // value={searchTerm}
        // onChange={handleChange}
          />
          </div>

  );
}

export default SearchBar;