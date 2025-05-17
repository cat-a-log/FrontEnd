
import Box from '../Box'
import "./myBoxesSection.css"


function MyBoxSection({boxes}) {

   return (
   <div className="box-section">
    <h3>My Boxes</h3>
     <div className="boxes">
      {boxes.map(box => (
       <Box key={box.id} box={box}/>
      ))}
    </div>
    </div>
   )

}
export default MyBoxSection