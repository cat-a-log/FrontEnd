
import "./button.css";

function Button({ children, onClick }) {
  return (
    <button className="baseButton" onClick={onClick}>
      {children}
    </button>
  );
}

function SearchButton({onClick}) {

  return <Button onClick={onClick}>SEARCH</Button>;
}

function CreateBoxButton({onClick}) {
  
  return <Button onClick={onClick}>CREATE A BOX</Button>;
}



export default Button;
export { SearchButton, CreateBoxButton };

