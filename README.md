
# cordova-plugin-whois

[![NPM version](https://img.shields.io/npm/v/cordova-plugin-whois.svg)](https://www.npmjs.org/package/cordova-plugin-whois)

This plugin implements the client side of the Internet Whois Protocol defined in [RFC 954](https://www.rfc-editor.org/rfc/rfc954.txt).

## Installation

> cordova plugin add https://github.com/t1st3/cordova-plugin-whois.git

## Usage

This plugin defines a global `whois` object.
Although the object is in the global scope, it is not available until after the `deviceready` event.

### Usage with default whois server

The whois server `whois.internic.net` will be used if no whois server is specified. Here is an example query to the default server for information regarding the domain `wikipedia.com`:

```js
document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
  var w = new whois(['wikipedia.com']);
  setTimeout(function () {
    console.log(w.results);
  }, 5000);
}
```

### Usage with a specific server

You can query a specific whois server. Here is an example query to the whois server `whois.pir.org` for information regarding the domain `apache.org`:

```js
document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
  var w = new whois(['apache.org@whois.pir.org']);
  setTimeout(function () {
    console.log(w.results);
  }, 5000);
}
```

NOTE: You can get an exhaustive list of whois servers at [IANA's Root Zone Database](http://www.iana.org/domains/root/db).

### Usage with multiple queries

You can perform multiple queries (here, a query to the whois server `whois.pir.org` for information regarding the domain `apache.org`, and another query to the whois server `whois.nic.fr` for information regarding the domain `ovh.fr`):

```js
document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
  var w = new whois(['ovh.fr@whois.nic.fr', 'apache.org@whois.pir.org']);
  setTimeout(function () {
    console.log(w.results);
  }, 5000);
}
```

## Properties

- whois.results

## whois.results

Get the results of the query.

Results look like this:

```json
[
  {
    "querystatus": "apache.org@whois.pir.org",
    "whois": "success",
    "result": "RESULT FROM WHOIS SERVER"
  }
]
```

### Supported Platforms

- Android
