
import { SearchButton } from "../components/Button";

import SearchBar from "../components/SearchBar";
import TitleHome from "../components/Titles/titleHome";
import SearchSection from "../components/Search-section";

function Search() {
  const handleSearchButton = () => console.log("clickSearch");
  return (
    <>
      
      <TitleHome />
      <SearchBar />
      <div className="button">
        <SearchButton onClick={handleSearchButton} />
      </div>
      <SearchSection />
    
    </>
  );
}

export default Search;
