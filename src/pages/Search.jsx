import Header from "../components/Header";
import { SearchButton } from "../components/Button";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import TitleHome from "../components/Titles/titleHome";
import SearchSection from "../components/Search-section";

function Search() {
  const handleSearchButton = () => console.log("clickSearch");
  return (
    <div className="container">
      <Header />
      <TitleHome />
      <SearchBar />
      <div className="button">
        <SearchButton onClick={handleSearchButton} />
      </div>
      <SearchSection />
      <Footer />
    </div>
  );
}

export default Search;
