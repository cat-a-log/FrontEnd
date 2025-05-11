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
  return <Button onClick={onClick}>LOGIN</Button>;
}

function SignupButton({ onClick }) {
  return <Button onClick={onClick}>SIGNUP</Button>;
}

function AddItemButton({ onClick }) {
  return <Button onClick={onClick}>ADD AN ITEM</Button>;
}

export default Button;
export { SearchButton, CreateBoxButton, LoginButton, SignupButton, AddItemButton };
