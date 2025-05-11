import './item.css'

function ItemShow() {

   return (
    
   <div class="item-container">
        <div class="image-container">
            <img src="/src/assets/item_christmas.png" alt="Christmas Lights"/>
        </div>
        <div class="info-container">
            <h2 class="title">Christmas Lights</h2>
            <p class="location-item">Attic</p>
            <p class="quantity">105</p>
            <p class="date">22-08-2023</p>
        </div>
        <div class="icons-container">
            <div class="separator"></div>
            <button class="show-button">
                <i class=""></i>
                <span class="action-text">SHOW</span>
            </button>
        </div>
    </div>
    
   )

}
export default ItemShow