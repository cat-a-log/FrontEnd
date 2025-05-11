

import "./popupDelete.css"
import { YesButton, NoButton } from "../Button";

function PopupDelete() {
  return (
      <div className="popup-container"> 
      <p> Are you sure you want to delete your box?</p>
       <div className="buttons-double-popup">
          <YesButton />
          <NoButton />
        </div>
      </div>
  )
}

export default PopupDelete;