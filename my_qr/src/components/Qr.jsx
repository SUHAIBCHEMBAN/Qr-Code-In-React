import React,{useState} from 'react'
import './Qr.css'
import QRCode from "react-qr-code";

const  Qr = () => {
  const [text,setText] = useState("");

  function genaratQR(e){
    setText()
  }

  function handleChange(e){
    setText(e.target.value)
  }
  return (
    <div>
     <div className="main">
        <h1>Genarat Your QR Code</h1>
        {text &&<QRCode value={text} />}
        
        <div className="inputs">
            <p>Enter Your Text Here</p>

            <input type="text" value={text} onChange={(e) =>
            {handleChange(e)}} /> &nbsp;

        </div>
     </div>
    </div>
  )
}

export default Qr