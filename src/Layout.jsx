
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import { Outlet } from 'react-router';

function Layout() {
 

  return (
    
      <div className='container'>
       <Header/>
       <Outlet/>
       <Footer/> 
      </div>
      
  
  );
}

export default Layout;
