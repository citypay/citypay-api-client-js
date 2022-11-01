const { DirectPostMac } = require('../../src/utils/DirectPostMac');
const Hex = require('crypto-js/enc-hex');

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd() + '/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd() + '/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.citypay_api_client);
  }
}(this, function (expect) {
  'use strict';


  describe('Can Create DirectPost Mac', () => {
    it('should create mac', async () => {
      const mac = DirectPostMac.create('LK123456789', Hex.parse('0123456789ABCDEF'), 27595, 'OD-12345678');
      expect(mac).to.be("163DBAB194D743866A9BCC7FC9C8A88FCD99C6BBBF08D619291212D1B91EE12E");
    })
  });

  describe('Can Validate DirectPost Mac', () => {
    it('should create mac', async () => {
      const isValidMac = DirectPostMac.validate('LK123456789', Hex.parse('0123456789ABCDEF'), 27595, 'OD-12345678', '163DBAB194D743866A9BCC7FC9C8A88FCD99C6BBBF08D619291212D1B91EE12E');
      expect(isValidMac).to.be(true);
    })
  });

}))
;
