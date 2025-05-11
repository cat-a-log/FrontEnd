

import "./popupDelete.css"
import { YesButton, NoButton } from "../Button";

function PopupDelete() {
  return (
      <div className="popup-container"> 
      <p> Deleting the box will erase all its content. Are you sure to continue?</p>
       <div className="buttons-double-popup">
          <YesButton />
          <NoButton />
        </div>
      </div>
  )
}

export default PopupDelete;