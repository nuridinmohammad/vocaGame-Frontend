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

const setEncryptedCookie = (
  key: string,
  data: any,
  expirationTime?: any
): void => {
  const encryptedData: string = encrypt(data);
  if (expirationTime) {
    Cookies.set(key, encryptedData, {
      expires: expirationTime,
      path: "/profile",
    });
    return;
  } else {
    Cookies.set(key, encryptedData, { path: "/" });
  }
};

const getDecryptedCookie = (key: string): any => {
  const encryptedData: string | undefined = Cookies.get("token");
  if (encryptedData) {
    return decrypt(encryptedData);
  }
  return null;
};

const removeCookie = (key: string): void => {
  Cookies.remove(key, { path: "/profile" });
};

export { setEncryptedCookie, getDecryptedCookie, removeCookie, decrypt };
