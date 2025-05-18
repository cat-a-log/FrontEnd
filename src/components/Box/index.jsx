import { useNavigate } from 'react-router'
import './box.css'

function Box({box}) {
  const navigate = useNavigate ();
  const handleClick = () => {
  navigate ("/boxdetails/" + box.id)
}
   return (

    <button className="box-container-button" onClick={handleClick}>
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