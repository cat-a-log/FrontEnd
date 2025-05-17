
import "./forms.css";
import { AddItemButton} from "../Button";

function FormAddItem() {
  return (
     <form className="form-createBox">
      <input
        className="form-createBox-info"
        type="text"
        placeholder="Name your item | Ex: Christmas Lights"
      />
       <input
        className="form-createBox-info"
        type="number"
        placeholder="Quantity | Ex: 2,572"
      />
         <input
        className="form-createBox-addimage"
        type="file"
       
      />
      <div className="button">
        <AddItemButton/>
      </div>
    </form>
  
  );
}

export default FormAddItem;
