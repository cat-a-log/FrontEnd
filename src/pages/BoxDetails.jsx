
import Header from '../components/Header';
import { DeleteBoxButton, UpdateBoxButton } from '../components/Button';
import Footer from '../components/Footer';
import TitleBoxDetails from '../components/Titles/titleBoxDetails';
import BoxDetailsSection from "../components/BoxDetails-section";

function BoxDetails() {
 
  const handleUpdateBoxButton=() => console.log('clickUpdateBoxButton')
  return (
    
      <div className='container'>
       <Header/>
       <TitleBoxDetails/>
       <div className='buttons-double'>
       <UpdateBoxButton onClick={handleUpdateBoxButton}/>
       <DeleteBoxButton/>
       </div>
       <BoxDetailsSection />
       <Footer/> 
      </div>
      
  
  );
}

export default BoxDetails;
