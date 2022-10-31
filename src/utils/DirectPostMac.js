import Hex from 'crypto-js/enc-hex';
import HmacSha256 from 'crypto-js/hmac-sha256';
import Utf8 from 'crypto-js/enc-utf8';


export class DirectPostMac {

  static validate(licenceKey, nonce, amount, identifier, macToValidate) {
    const mac = this.create(licenceKey, nonce, amount, identifier);
    return mac === macToValidate;
  };

  static create(licenceKey, nonce, amount, identifier) {
    const value = nonce.toString(Hex).toUpperCase() + amount + identifier;
    const hash = HmacSha256(value, Utf8.parse(licenceKey));

    return Hex.stringify(hash).toString('hex').toUpperCase();
  }
}
