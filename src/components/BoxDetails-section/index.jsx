
import Item from '../Item/item-edit-delete'
import AddItem from '../Item/add-item'
import "./boxDetailsSection.css"


function BoxDetailsSection({items, box}) {

   return (
   <div className="search-section">
    <h3>My Items</h3>
     <div className="items">
     <AddItem box = {box}/>
      {items.map(item => (
       <Item key={item.id} item={item} box={box}/>
      ))}
    
    </div>
    </div>
   )

}
export default BoxDetailsSection
