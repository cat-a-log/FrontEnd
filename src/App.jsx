
import Header from './components/Header';
import  {CreateBoxButton} from './components/Button'; 
import MainApp from './components/Titles/titleApp';
import Footer from './components/Footer';
import './App.css'

function App() {
 
  const handleSearchButton=() => console.log('clickSearch')
  return (
    
      <div className='container'>
       <Header/>
       <MainApp/>
    
      <div className='subtext'>
       <p>Effortlessly identify box contents and minimize errors. Our user-friendly QR code solution simplifies organization for businesses and homes alike.</p>
       </div>
       <div className='button'>
       <CreateBoxButton onClick={handleSearchButton}/>
       </div>
       <Footer/> 
      </div>
      
  
  );
}

export default App;
