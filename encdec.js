// Just for Encrypted Storage and Decrypted Storage
import CryptoJS from 'crypto-js';

export const SECRET_KEY = 'SECRET_KEY';

export default {
  encLocalStrg(data) {
    const encryptedUser = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      SECRET_KEY
    ).toString();

    return encryptedUser;
  },

  decLocalStrg(data) {
    const bytes = CryptoJS.AES.decrypt(data, SECRET_KEY);
    const user = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return user;
  },
};
