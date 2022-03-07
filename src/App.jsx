import { useState } from 'react'
import qrcode2 from 'qrcode';
import QrReader from "react-scan-qr";

function App() {
  const [text,setText] = useState('');
  const [imageURL, setImageURL] = useState(true);
  const [result, setResult] = useState('No result');

  const qrCode = async () =>{
    try {
        const response = await qrcode2.toDataURL(text);
        setImageURL(response);
       
    }catch(e){
      console.log(error);
    }

  }
//
const handleScan = (data) => {
  if (data) {
   setResult(data);
  }
};

const handleError = (err) => {
  console.error(err);
};
  return (
    <div className="App">
      <div className="container bg-blue-500 py-6 text-center">
      <h1 className="text-lg lg:text-2xl">Generate and scan QR Code</h1> 
       </div>
       <div className="container mt-12 ">
         <div className="lg:flex gap-2 p-6">
            <input onChange={(e) =>setText(e.target.value)} type="text" className="py-2 lg:px-4 w-full border-gray-700 border-2 mb-3 rounded" placeholder="Enter URL" required={true}/>
            <button onClick={qrCode} type="text" className="bg-sky-500 text-white text-sm w-full lg:px-2 py-3 rounded">Generate</button>
         </div>

         <div className="mt-4">
          <div className="px-6">
          <img src={imageURL} height="250" width="250" alt='img' />
          <a href={imageURL} className="px-4 py-3 bg-green-600 rounded" download>Download</a>
          </div>
        
         </div>
         
       </div>
        <div className="container lg:w-1/2 lg:h-1/2 w-full h-full p-4">
          <h1>Scan QRCode</h1>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          onLoad={true}
        
        />
        <a href={result}>{result}</a>
       </div>
      
    </div>
  )
}

export default App
