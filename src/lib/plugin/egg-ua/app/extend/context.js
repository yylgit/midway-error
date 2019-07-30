'use strict';

module.exports = {
  get isIOS() {
    debugger
    const iosReg = /iphone|ipad|ipod/i;
    return iosReg.test(this.get('user-agent'));
  },
};
