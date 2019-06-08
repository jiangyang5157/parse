var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var path = require('path');

var appId = process.env.APP_ID;
var masterKey = process.env.MASTER_KEY;

var serverDomain = process.env.SERVER_DOMAIN;
var port = process.env.PORT;
var mount= process.env.MOUNT;
var serverUrl;

var databaseUri = process.env.DATABASE_URI;
var cloudMain = process.env.CLOUD_MAIN;

if (!appId) {
  appId = 'myAppId';
}
if (!masterKey) {
  masterKey = 'myMasterKey';
}

if (!serverDomain) {
  serverDomain = 'http://118.24.251.163';
}
if (!port) {
  port = '1337';
}
if (!mount) {
  mount = '/parse';
}
serverUrl = serverDomain + ':' + String(port) + mount

if (!databaseUri) {
  databaseUri = 'mongodb://localhost:27017/dev';
}
if (!cloudMain) {
  cloudMain = __dirname + '/cloud/main.js';
}

console.log('appId=' + appId);
console.log('masterKey=' + masterKey);
console.log('serverUrl=' + serverUrl);
console.log('databaseUri=' + databaseUri);
console.log('cloudMain=' + cloudMain);

var api = new ParseServer({
  appId: appId,
  masterKey: masterKey,
  serverURL: serverUrl,
  databaseURI: databaseUri,
  cloud: cloudMain
});

var app = express();

app.use(mount, api);

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// There will be a test page available on the /test path of your server url
app.get('/test', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/test.html'));
});

// The rest of your web routes
app.get('/', function(req, res) {
  res.status(200).send('I dream of being a website.');
});

var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
  console.log('parse-server running on: ' + serverUrl);
});

// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer);
