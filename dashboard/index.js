var express = require('express');
var ParseDashboard = require('parse-dashboard');

var appId = process.env.APP_ID;
var masterKey = process.env.MASTER_KEY;

var serverDomain = process.env.SERVER_DOMAIN;
var serverPort = process.env.SERVER_PORT;
var mount= process.env.MOUNT;
var serverUrl;

var port = process.env.SERVER_PORT;

var appName = process.env.APP_NAME;
var username = process.env.USERNAME;
var password = process.env.PASSWORD;

if (!appId) {
  appId = 'myAppId';
}
if (!masterKey) {
  masterKey = 'myMasterKey';
}

if (!serverDomain) {
  serverDomain = 'http://111.231.2.169';
}
if (!serverPort) {
  serverPort = '1337';
}
if (!mount) {
  mount = '/parse';
}
serverUrl = serverDomain + ':' + String(serverPort) + mount;

if (!port) {
    port = '4040';
}

if (!appName) {
  appName = 'MyApp'
}
if (!username) {
  username = 'username'
}
if (!password) {
  password = 'password'
}

console.log('appName=' + appName);
console.log('appId=' + appId);
console.log('masterKey=' + masterKey);
console.log('serverUrl=' + serverUrl);

var dashboard = new ParseDashboard(
  {
   apps: [
    {
      appId: appId,
      masterKey: masterKey,
      serverURL: serverUrl,
      appName: appName,
      production: false,
    },
  ],
  users: [
    {
      user: username,
      pass: password,
    }
  ],
  }, 
  {
    allowInsecureHTTP: true
  }
);

var app = express();

// make the Parse Dashboard available at /
app.use('/', dashboard);

var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
  console.log('parse-dashboard running on: ' + serverUrl);
});
