
import Item from '../Item/item-edit-delete'
import AddItem from '../Item/add-item'
import "./boxDetailsSection.css"

function BoxDetailsSection() {

   return (
   <div className="search-section">
    <h3>My Items</h3>
     <div className="items">
     <AddItem/>
     <Item/>
     <Item/>
     <Item/>
     <Item/>
    
    </div>
    </div>
   )

}
export default BoxDetailsSection
