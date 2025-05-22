
import QRimage from "/src/assets/qr.svg"; 


function QR() {
  return (
      <div className="qr-container"> 
        <img src={QRimage} alt="QR image" />
      </div>
  )
}

export default QR;