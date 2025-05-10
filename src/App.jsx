
import Header from './components/Header';
import  {SearchButton } from './components/Button'; 
import Main_App from './components/Mains/App/main';

function App() {
 
  const handleSearchButton=() => console.log('clickSearch')
  return (
    
      <>
       <Header/>
       <Main_App/>
    
      <div>
       <a>Effortlessly identify box contents and minimize errors. Our user-friendly QR code solution simplifies organization for businesses and homes alike.</a>
       <SearchButton onClick={handleSearchButton}/>
       </div>
      </>
  
  );
}

export default App;
