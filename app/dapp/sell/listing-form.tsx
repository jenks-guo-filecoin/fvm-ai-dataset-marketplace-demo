"use client";
import { createClient } from '@utils/supabase/server';
import UploadDatasetForm from "@/dapp/sell/upload-dataset-form";
import { useState } from 'react';

async function submitDeal () {
  const supabase = createClient();
  uploadToLighthouse();
  uploadToLighthouse();
}

async function uploadToLighthouse () {
  console.log("upload to lighthouse")
}

export default function UploadDataset() {
  const [formStatus, setFormStatus] = useState("empty");
  const [datasetCID, setDatasetCID] = useState(null);
  const [previewCID, setPreviewCID] = useState(null);

  return (
    <main>
      <form action="formAction">
        <label htmlFor="dataset">Datset Name:</label>
        <input id="dataset_name" name="dataset_name" type="text"  /><br/>

        <label htmlFor="desc">Description:</label>
        <input id="desc" name="desc" type="text"  /><br/>

        <legend>Type:</legend>

        <input id="type-csv" name="type" type="radio" value="csv"  />
        <label htmlFor="type">.csv</label> <br/>

        <input id="type-.json" name="type" type="radio" value="json"  />
        <label htmlFor="type">.json</label><br/>

        <input id="type" name="type" type="radio" value="text"  />
        <label htmlFor="type">.txt</label><br/>

        <label htmlFor="price">Price:</label>
        <input id="price" name="price" type="number" step="0.01"  /><br/>


        {datasetCID === null ? 
          <UploadDatasetForm />
          :     
          <div>
            <label htmlFor="dataset_cid">Dataset CID:</label><br/>
            <input id="dataset_cid" name="dataset_cid" type="text" value={datasetCID} required disabled/>
          </div>
        }

        <label htmlFor="upload_preview">Upload Preview:</label><br/>
        <input id="upload_preview" name="upload_preview" type="file"  /><br/>

        {/* <button formAction={submitDeal}>Upload to Filecoin</button> */}

      </form>
    </main>

  )
}
