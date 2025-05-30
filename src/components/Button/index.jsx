import "./button.css";

function Button({ children, onClick }) {
  return (
    <button className="baseButton" onClick={onClick}>
      {children}
    </button>
  );
}

function SearchButton({ onClick }) {
  return <Button onClick={onClick}>SEARCH</Button>;
}

function CreateBoxButton({ onClick }) {
  return <Button onClick={onClick}>CREATE A BOX</Button>;
}

function LoginButton({ onClick }) {
  return <Button onClick={onClick}>LOG IN</Button>;
}

function SignupButton({ onClick }) {
  return <Button onClick={onClick}>SIGN UP</Button>;
}

function AddItemButton({ onClick }) {
  return <Button onClick={onClick}>ADD AN ITEM</Button>;
}

function UpdateBoxButton({ onClick }) {
  return <Button onClick={onClick}>UPDATE BOX</Button>;
}

function UpdateItemButton({ onClick }) {
  return <Button onClick={onClick}>UPDATE ITEM</Button>;
}

function YesButton({ onClick }) {
  return <Button onClick={onClick}>YES</Button>;
}

function DeleteBoxButton({ onClick }) {
  return <button className="deleteButton" onClick={onClick}>DELETE BOX</button>;
}

function NoButton({ onClick }) {
  return <button className="deleteButton" onClick={onClick}>NO</button>;
}


export default Button;
export { SearchButton, CreateBoxButton, LoginButton, SignupButton, AddItemButton, UpdateBoxButton, UpdateItemButton, YesButton, DeleteBoxButton,  NoButton };
