import './item.css'

function Item() {

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
            <button class="edit-button">
                <i class="fas fa-pencil"></i>
                <span class="action-text">EDIT</span>
            </button>
            <div class="separator"></div>
            <button class="delete-button">
                <i class="fa-regular fa-trash-can"></i>
                <span class="action-text">DELETE</span>
            </button>
        </div>
    </div>
    
   )

}
export default Item