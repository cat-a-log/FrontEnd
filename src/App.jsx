
import './App.css'
import MyButtons from './components/buttonVariantions'

function App() {
  const handleSearchClick = (buttonName) => {
    console.log(`"${buttonName}" button clicked! Performing search...`);
    // Add your search functionality here
  };

  return (
  <div>
      <h1>catalog</h1>
      <MyButtons buttonToShow="search" /> {/* Only the button with name "search" will be rendered */}
    </div>
  );
}

export default App;