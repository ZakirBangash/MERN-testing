import cryptoJs from 'crypto-js';
var data = [{ id: 1, name: 'Haroon' }, { id: 2, name: 'Zafar' }]
  // Encrypt
  var ciphertext = cryptoJs.AES.encrypt(JSON.stringify(data), 'my-secret-key@123').toString();
  //log encrypted data
  
  export default ciphertext;