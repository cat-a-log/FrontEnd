
import "./forms.css";
import { CreateBoxButton} from "../Button";

function FormCreateBox() {
  return (
     <form className="form-createBox">
      <input
        className="form-createBox-info"
        type="text"
        placeholder="Name your box | Ex: Christmas Deco"
      />
       <input
        className="form-createBox-info"
        type="text"
        placeholder="Location of your box | Ex: Attic"
      />
        <input
        className="form-createBox-info"
        type="textarea"
        placeholder="Description of your box or content- max 100 characters"
      />
      <div className="button">
        <CreateBoxButton/>
      </div>
    </form>
  
  );
}

export default FormCreateBox;
