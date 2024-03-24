import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

const ENCRYPTION_KEY: string = "vocaGame";

const encrypt = (data: any): string => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), ENCRYPTION_KEY).toString();
};

const decrypt = (encryptedData: string): any => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

const setEncryptedCookie = (key: string, data: any): void => {
  const encryptedData: string = encrypt(data);
  Cookies.set(key, encryptedData, { expires: 1 }); // Cookie expires in 1 day
};

const getDecryptedCookie = (key: string): any => {
  const encryptedData: string | undefined = Cookies.get(key);
  if (encryptedData) {
    return decrypt(encryptedData);
  }
  return null;
};

const removeCookie = (key: string): void => {
  Cookies.remove(key);
};

export { setEncryptedCookie, getDecryptedCookie, removeCookie };
