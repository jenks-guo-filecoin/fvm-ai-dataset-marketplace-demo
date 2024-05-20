import lighthouse from "@lighthouse-web3/sdk";
import axios from "axios";
import "dotenv/config";


const path = "./package-lock.json"
const apikey = process.env.LIGHTHOUSE_APIKEY;

// const uploadResponse = await lighthouse.upload(path, apikey);
// console.log(uploadResponse);

// lighthouse configs
// const dealParams = {
//   num_copies: 2,
//   repair_threshold: 28800,
//   renew_threshold: 240,
//   miner: ["t017840"],
//   network: 'calibration',
//   add_mock_data: 2
// };


// const dealParam_default = {
// 	"network":"calibration"
// }


// const dealParam_mock = {
// 	"add_mock_data": 40,
// 	"network":"calibration"
// }

// const upload_response = await lighthouse.upload(path, apikey, false, dealParam_mock);
// console.log(upload_response);

// old file
// const lighthouse_cid = "QmQpLdbxvW4XhsdD6beogx8q5juJormiw8mHmv8PQpUqxE";
// const lighthouse_piececid = "baga6ea4seaqlppbdjtlsxdf744kbfvrl2bj35rrv5wwyfdq2ixcgpufkm65a6ca";

// new file
// const lighthouse_cid = "QmU9Yd6UFSGWsj2zKVSkWfwzM7wuyDya25T3tvZ4XQwrHH";

// mainnet piece CID
// const lighthouse_piececid = "baga6ea4seaqhm43kzafpoxy5oioai6c6lyguhp3um7qxbmq373v7clyf4nex6ly"

// // Test of the get_proof endpoint
// let response = await axios.get("https://api.lighthouse.storage/api/lighthouse/get_proof", {
//     params: {
//         cid: lighthouse_cid,
//         network: "testnet" // Change the network to mainnet when ready
//     }
// })
// console.log(response);
// console.log(response.data.dealInfo);

// if dea has been made: 
// data: {
//   pieceCID: 'baga6ea4seaqlppbdjtlsxdf744kbfvrl2bj35rrv5wwyfdq2ixcgpufkm65a6ca',
//   dealInfo: [ [Object], [Object] ]
// }

// if deal has not been made response.data returns: 
// error: { code: 404, message: 'Record not found.' }


// Test lighthouse.getFileInfo
// let response = await lighthouse.getFileInfo(lighthouse_cid);
// response
// {
//   fileSizeInBytes: '94078',
//   cid: 'QmU9Yd6UFSGWsj2zKVSkWfwzM7wuyDya25T3tvZ4XQwrHH',
//   encryption: false,
//   fileName: 'package-lock.json',
//   mimeType: 'application/json'
// }

// the input has to be a mainnet CID
// let response = await lighthouse.dealStatus("QmQqdLFHZCKjCavWtkcnt3ae2mgNLsf98cdpcZH8o8DfvN");
// console.log(response);

// if deal has been made
// {
//   data: [
//     {
//       pieceCID: 'QmQqdLFHZCKjCavWtkcnt3ae2mgNLsf98cdpcZH8o8DfvN',
//       payloadCid: 'bafkreib7iaqjyc5p6kqbw4cpzq2ibbnjjbba3w7qb4oogphemmdv44dpsy',
//       pieceSize: 524288,
//       carFileSize: 396074,
//       dealId: 74606268,
//       miner: 'f01771403',
//       content: 395888,
//       dealStatus: 'Sealing: Proving',
//       startEpoch: 3714464,
//       endEpoch: 4232864,
//       publishCid: 'bafy2bzacedupiqlo732qxawhctakxtfjyljuwjvndih22wqkkdhon4fsnsopa',
//       dealUUID: '10ed5a44-1d76-425f-af70-270a78fefb6f',
//       providerCollateral: '7.568 mFIL',
//       chainDealID: 74606268
//     },
//     {
//       pieceCID: 'QmQqdLFHZCKjCavWtkcnt3ae2mgNLsf98cdpcZH8o8DfvN',
//       payloadCid: 'bafkreib7iaqjyc5p6kqbw4cpzq2ibbnjjbba3w7qb4oogphemmdv44dpsy',
//       pieceSize: 524288,
//       carFileSize: 396074,
//       dealId: 75486682,
//       miner: 'f02366527',
//       content: 395888,
//       dealStatus: 'Sealing: Proving',
//       startEpoch: 3734467,
//       endEpoch: 7276867,
//       publishCid: 'bafy2bzaceaohycdaye2cxqdgzwhmialv7ncnaqigxgdctkmldparqpjdbiip6',
//       dealUUID: '1209331c-89b8-43d2-b50f-ecd18b78b1fe',
//       providerCollateral: '7.505 mFIL',
//       chainDealID: 75486682
//     }
//   ]
// }

// if deal has not been made yet response returns: 
// { data: [] }