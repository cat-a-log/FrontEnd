
import Item from '../Item'
import AddItem from '../Item/add-item'
import "./searchSection.css"

function SearchSection() {

   return (
   <div className="search-section">
    <h3>Items Founded</h3>
     <div className="items">
     <Item/>
     <Item/>
    
    </div>
    </div>
   )

}
export default SearchSection