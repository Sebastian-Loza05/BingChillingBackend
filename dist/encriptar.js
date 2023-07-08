"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encryptString = encryptString;
var crypto = require('crypto');
function encryptString(text, secretKey) {
  var cipher = crypto.createCipher('aes-256-cbc', secretKey);
  var encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher["final"]('hex');
  return encrypted;
}