import CryptoJS from 'crypto-js';

const NODE = 'development';
const SECRET_KEY = 'w3lllllOVE4le';

const hash = {
  hash: function hash(key) {
    key = CryptoJS.SHA256(key, SECRET_KEY);

    return key.toString();
  },

  encrypt(data) {
    data = CryptoJS.AES.encrypt(data, SECRET_KEY).toString();

    return data;
  },

  decrypt(data) {
    data = CryptoJS.AES.decrypt(data, SECRET_KEY).toString(CryptoJS.enc.Utf8);

    return data;
  },
};

export default {
  setItem(key, value) {
    if (NODE == 'development') {
      localStorage.setItem(key, value);
    } else {
      const secKey = hash.hash(key);
      const data = hash.encrypt(value);

      localStorage.setItem(secKey, data);
    }
  },

  getItem(key) {
    if (NODE == 'development') {
      const data = key;
      return data;
    } else {
      const secKey = hash.hash(key);
      const data = localStorage.getItem(secKey);

      if (data) return hash.decrypt(data);

      return null;
    }
  },

  removeItem(key) {
    if (NODE !== 'development') key = hash.hash(key);

    localStorage.removeItem(key);
  },
};
