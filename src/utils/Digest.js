import AuthResponse from '../model/AuthResponse';
const { createHash } = require('crypto');

export class Digest {

  static validateDigest(authResponse, licenceKey) {
    const authResponseInstance = AuthResponse.constructFromObject(authResponse, AuthResponse);

    const stringToConvert = authResponseInstance.authcode
      + authResponseInstance.amount
      + authResponseInstance.result_code
      + authResponseInstance.merchantid
      + authResponseInstance.transno
      + authResponseInstance.identifier
      + licenceKey;

    const base64String = createHash('sha256').update(stringToConvert).digest('base64')
    return base64String === authResponseInstance.sha256;
  }
}
