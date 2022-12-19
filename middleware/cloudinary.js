const cloudinary = require("cloudinary").v2;

require("dotenv").config({ path: "./config/.env" });

// get the timestamp in seconds
var timestamp = Math.round((new Date).getTime()/1000)

// print out the timestamp
console.log("Timestamp: ", timestamp)

// get the signature using node SDK method api_sign_request
var signature = cloudinary.utils.api_sign_request({
  timestamp: timestamp,
  // eager: 'w_400,h_300,c_pad|w_260,h_200,c_crop',
  public_id: 'sample_image'},
  process.env.API_SECRET);

  // show the signature
  console.log('Signature: ', signature);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// const provider = {}; 
//  // object with cloudinary api constants like apiSecret and apiKey
// function generateUploadUrl(folder){
//   let paramArray = [
//     {name: 'timestamp', value: cloudinary.utils.timestamp(), toSign: true},
//     {name: 'type', value: 'authenticated', toSign: false},
//     {name: 'api_key', value: provider.apiKey, toSign: false},
//     {name: 'folder', value: folder.toString(), toSign: true},
//     {name: 'callback', value: 'http://widget.cloudinary.com/cloudinary_cors.html', toSign: true},
//   ];

//   let paramsToSign = paramArray.filter(p => p.toSign).reduce((coll, param)=>{
//     coll[param.name] = param.value;
//     return coll;
//   }, {});
  
//   let signature = cloudinary.utils.api_sign_request(paramsToSign,  providers.cloudinary.apiSecret);

//   let params = paramArray.map(p => `${p.name}=${p.value}`).join('&');
//   let paramObj = {};
//   paramArray.forEach(p => paramObj[p.name] = p.value);
//   paramObj.signature = signature;

//   let url = `${provider.uploadUrl}?${params}&signature=${signature}`;
//   let retVal = {url: url, parameters: paramObj};
//   console.log(retVal)
//   return retVal;
// }
// cloudinary.utils.api_sign_request(params_to_sign, api_secret);
module.exports = cloudinary;
