/**
 * API Key Generation Handler
 */

import CryptoJS from "crypto-js/core";
import Hex from 'crypto-js/enc-hex';
import HmacSha256 from 'crypto-js/hmac-sha256';
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';

class ApiKey {


    constructor(client_id, licence_key) {
        this.client_id = client_id;
        this.licence_key = licence_key;
    }

    generateApiKey(nonce, dt = new Date()) {

        function dtToBuffer(dt) {
            const pad2 = n => n < 10 ? '0' + n : n;
            const dtstr = [dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate(), dt.getUTCHours(), dt.getUTCMinutes()].map(pad2).join("");
            // console.log("KeyDTStr: " + dtstr)
            return Hex.parse(dtstr)
        }

        if (!nonce) {
            nonce = CryptoJS.lib.WordArray.random(128 / 8);
        } else if (typeof nonce === 'string') {
            nonce = Hex.parse(nonce);
        } else if (typeof nonce !== 'object') {
            throw new Error("Unsupported nonce type: " + (typeof nonce));
        }
        const msg = Utf8.parse(this.client_id)
            .concat(nonce)
            .concat(dtToBuffer(dt));
        const hash = HmacSha256(msg, Utf8.parse(this.licence_key));
        // console.log("HmacSha256: " + msg + " -> " + hash);
        const packet = Utf8.parse(this.client_id + '\u003A' + nonce.toString(Hex).toUpperCase() + '\u003A').concat(hash);
        return Base64.stringify(packet);
    }

}

export default ApiKey;
