
import Box from '../Box'
import "./boxSection.css"
function BoxSection() {

   return (
   <div className="box-section">
    <h3>My Boxes</h3>
     <div className="boxes">
     <Box/>
     <Box/>
     <Box/>
    </div>
    </div>
   )

}
export default BoxSection