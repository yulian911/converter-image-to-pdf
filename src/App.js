
import './App.css';
import { useState } from 'react';
import Images from './assets/images.jpg'
import { jsPDF } from "jspdf";


function App() {
  const [image,setImage]=useState()
  const [show ,setShow]=useState()
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImage(URL.createObjectURL(file));
   }

   const pdfDown=()=>{
    const doc = new jsPDF();
    doc.addImage(image,10,10)
    doc.save('imgToPdf.pdf');
   }

  return (
    <div className="container">
      <h1>JPG ,JPEG,PNG do PDF</h1>
      <div className="upload-img">
        <input type='file'  accept=".png ,.jpg,.jpeg"  onChange={onImageChange}/>
        Dodaj plik
      </div>
      <img className="showImg" src={image} />
      <button onClick={pdfDown}>Converte</button>
    
    </div>
  );
}

export default App;
