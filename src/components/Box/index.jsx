import './box.css'

function Box({box}) {

   return (


    <button className="box-container-button">
    <div className="box-header">
      <div className="square"></div>
     
    </div>
    <div className="box-info">
      <h3 className="box-name">{box.name}</h3>
      <p className="location">{box.location}</p>
    </div>
    </button>

   )

}
export default Box