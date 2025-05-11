import "./forms.css";

function FormCreateBox() {
  return (
     <form className="form-createBox">
      <input
        class="form-createBox-info"
        type="text"
        placeholder="Name your box | Ex: Christmas Deco"
      />
       <input
        class="form-createBox-info"
        type="text"
        placeholder="Location of your box | Ex: Attic"
      />
        <input
        class="form-createBox-info"
        type="textarea"
        placeholder="Description of your box or content- max 100 characters"
      />
         <input
        class="form-createBox-addimage"
        type="file"
       
      />
    </form>
  );
}

export default FormCreateBox;
