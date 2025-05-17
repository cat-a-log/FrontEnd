

import { SearchButton } from '../components/Button';
import SearchBar from '../components/SearchBar';
import TitleHome from '../components/Titles/titleHome';
import MyBoxesSection from '../components/MyBoxes-section';

function Home() {
 
  const handleSearchButton=() => console.log('clickSearch')
  return (
    
      <>
       <TitleHome/>
       <SearchBar/>
       <div className='button'>
       <SearchButton onClick={handleSearchButton}/>
       </div>
        <MyBoxesSection/>
      
      </>
      
  
  );
}

export default Home;
