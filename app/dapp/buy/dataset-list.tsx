import { createClient } from '@utils/supabase/server';

export default async function dataset_list() {

  // fetch data from supabase
  const supabase = createClient();
  const { data: datasets } = await supabase.from("datasets").select();

  return (
    <main>
      <div>DatasetList</div>
      <ul>
        {datasets.map((dataset) => (
          <div>
            <h3>{dataset.name}</h3>
            <hr />
            <p>{dataset.desc}</p>
            <p>Uploaded by: {dataset.uploaded_by}</p>
            <p>Type: {dataset.type}</p>
            <p>Size: {dataset.size} bytes</p>
            <p>Ask for: {dataset.price} FIL</p>
            <p>Deals: {dataset.deal_ids}</p>
            <p>Providers: {dataset.storage_providers}</p>
          </div>
        ))}
        <li> </li>
      </ul>
    </main>

  )
}
