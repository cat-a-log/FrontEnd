import SearchBar from '../components/SearchBar';
import TitleHome from '../components/Titles/titleHome';
import MyBoxesSection from '../components/MyBoxes-section';
import { useEffect, useState } from 'react';
import { getAPI } from '../services/Api';

function Home() {
  const [boxes, setBoxes] = useState ([])
  

  useEffect (()=> {
    const getBoxes = async() => {
      try {
        const response = await getAPI ("/box")
        setBoxes (response.content)
      } catch {

      }
    }
    getBoxes();
  },[])
  return (
    
      <>
       <TitleHome/>
       <SearchBar/>
       <MyBoxesSection boxes = {boxes}/>
      
      </>
      
  
  );
}

export default Home;
