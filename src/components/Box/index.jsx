import './box.css'

function Box() {

   return (

    <table>
      <thead>
        <tr>
          <td className= "square"></td>
          <td className= "empty-space"></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className= "box-name"colSpan="2">Box Name</th>
        </tr>
         <tr>
          <th className= "location" colSpan="2">Location</th>
        </tr>
      </tbody>
    </table>
   )

}
export default Box