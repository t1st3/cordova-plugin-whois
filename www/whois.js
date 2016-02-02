
var utils = require('cordova/utils'),
  exec = require('cordova/exec'),
  cordova = require('cordova');

function Whois (ipList) {
  this.results = null;
  var self = this;
  self.doWhois(ipList, function (info) {
    self.results = info;
  }, function (e) {
    utils.alert('[ERROR] Error initializing Cordova: ' + e);
  });
}

Whois.prototype.doWhois = function (ipList, successCallback, errorCallback) {
  exec(successCallback, errorCallback, "Whois", "getWhoisInfo", ipList);
};

module.exports = Whois;
