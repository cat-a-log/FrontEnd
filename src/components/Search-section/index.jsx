

import "./searchSection.css"
import ItemShow from '../Item/item-show'

function SearchSection() {

   return (
   <div className="search-section">
    <h3>Items Founded</h3>
     <div className="items">
     <ItemShow/>
     <ItemShow/>
    
    </div>
    </div>
   )

}
export default SearchSection