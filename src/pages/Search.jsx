
import Header from '../components/Header';
import { SearchButton } from '../components/Button';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import TitleHome from '../components/Titles/titleHome';
import Box from '../components/Box';


function Search() {
 
  const handleSearchButton=() => console.log('clickSearch')
  return (
    
      <div className='container'>
       <Header/>
       <TitleHome/>
       <SearchBar/>
       <div className='button'>
       <SearchButton onClick={handleSearchButton}/>
       </div>
      
       <Footer/> 
      </div>
      
  
  );
}

export default Search;
