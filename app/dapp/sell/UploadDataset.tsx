"use server"
import { createClient } from './../../../util/supabase/server';

async function submitDeal () {
  const supabase = createClient();
  uploadToLighthouse();
  uploadToLighthouse();
}

async function uploadToLighthouse () {
  console.log("upload to lighthouse")
}


export default async function UploadDataset() {
  return (
    <main>
      <form>
        <label htmlFor="dataset">Datset Name:</label>
        <input id="dataset_name" name="dataset_name" type="text" required /><br/>

        <label htmlFor="desc">Description:</label>
        <input id="desc" name="desc" type="text" required /><br/>

        <legend>Type:</legend>

        <input id="type-csv" name="type" type="radio" value="csv" required />
        <label htmlFor="type">.csv</label> <br/>

        <input id="type-.json" name="type" type="radio" value="json" required />
        <label htmlFor="type">.json</label><br/>

        <input id="type" name="type" type="radio" value="text" required />
        <label htmlFor="type">.txt</label><br/>

        <label htmlFor="price">Price:</label>
        <input id="price" name="price" type="number" step="0.01" required /><br/>

        <label htmlFor="upload_file">Upload:</label><br/>
        <input id="upload_file" name="upload_file" type="file" required /><br/>

        <label htmlFor="upload_preview">Upload Preview:</label><br/>
        <input id="upload_preview" name="upload_preview" type="file" required /><br/>

        {/* <button formAction={submitDeal}>Upload to Filecoin</button> */}

      </form>
    </main>

  )
}
