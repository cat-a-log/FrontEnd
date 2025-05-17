

import  {CreateBoxButton} from '../components/Button'; 
import MainApp from '../components/Titles/titleApp';

function App() {
 
  const handleSearchButton=() => console.log('clickSearch')
  return (
    
      <>
       <MainApp/>
      <div className='subtext'>
       <p>Effortlessly identify box contents and minimize errors. Our user-friendly QR code solution simplifies organization for businesses and homes alike.</p>
       </div>
       <div className='button'>
       <CreateBoxButton onClick={handleSearchButton}/>
       </div>
      </>
     
      
  
  );
}

export default App;
