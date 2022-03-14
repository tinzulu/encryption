// crypto module
const crypto = require("crypto");
const algorithm = "aes-256-cbc"; 
// generate 16 bytes of random data
const initVector = crypto.randomBytes(16);
// secret key generate 32 bytes of random data
const Securitykey = crypto.randomBytes(32);

//data encryption function 
function encrypt(text){
  // the cipher function
  const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
  // encrypt the message
  // input encoding
  // output encoding
  let encryptedData = cipher.update(text, "utf-8", "hex");
  encryptedData += cipher.final("hex");
  return encryptedData;
}

//data decryption function 
function decrypt(encryptedMessage){
  // the decipher function
  const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
  let decryptedData = decipher.update(encryptedMessage, "hex", "utf-8");
  decryptedData += decipher.final("utf8");
  return decryptedData;
}

// protected data
const message = "This is a secret message";
// encrypt data
let data = encrypt(message);
//output
console.log("Encrypted data "+ data);

//decrypt data
let plainMessage = decrypt(data);
//output
console.log("Decrypted data: "+ plainMessage);
