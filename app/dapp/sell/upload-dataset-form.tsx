
import { useActionState } from "react";
import { useState } from "react"; 
import lighthouse from "@lighthouse-web3/sdk";



export default function UploadDatasetForm() {
  const [file, setFile] = useState(null);
  const apikey = process.env.LIGHTHOUSE_APIKEY;

  const fileChanged = (e) => {
    setFile(e.target.files);
    console.log('file changed');
  }

  const uploadEncryptedData  = async (e) =>  {
    e.preventDefaultreventdefault();

    const dealParams = {
      num_copies: 2,
      repair_threshold: 28800,
      renew_threshold: 240,
      miner: ["t017840"],
      network: 'calibration',
      add_mock_data: 2
    };

    try {
      console.log('start upload');
      const upload_response = await lighthouse.upload(e.target.files, apikey, false, null);
      console.log(upload_response.data);
    } catch (e) {
      console.log(e.data);
    }
  }

  return (
    <main>
        <label htmlFor="upload_dataset">Upload Dataset:</label><br/>
        <input id="upload_dataset" name="upload_dataset" type="file" required />
        <button onClick={uploadEncryptedData} > Upload to Lighthouse</button>
    </main>
  )
}
