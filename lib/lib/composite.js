"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function composite(defaultFunc, customFunc) {
  return function (input) {
    if (customFunc) {
      var result = customFunc(input);
      if (result != null) {
        return result;
      }
    }
    return defaultFunc(input);
  };
}

exports.default = composite;