// @ts-ignore
import * as CryptoJS from 'crypto-js';

// @dynamic
export class AesHelper {
  private static secretKey = 'anlitiks20172020';


  static encrypt(word) {
    const key = CryptoJS.enc.Utf8.parse(this.secretKey);
    const srcs = CryptoJS.enc.Utf8.parse(word);
    const encrypted = CryptoJS.AES.encrypt(srcs, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
    return encrypted.toString();
  }


  static decrypt(word) {
    const key = CryptoJS.enc.Utf8.parse(this.secretKey);
    const decrypt = CryptoJS.AES.decrypt(word, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  }
}
