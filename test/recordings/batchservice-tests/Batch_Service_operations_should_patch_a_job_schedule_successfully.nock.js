// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/jobschedules/NodeSDKTestSchedule?api-version=2016-02-01.3.0', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 01 Apr 2016 05:56:05 GMT',
  etag: '0x8D359F2507F8447',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '3bdc028d-9db4-47d7-8430-d0c07bb68b94',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule',
  date: 'Fri, 01 Apr 2016 05:56:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/jobschedules/NodeSDKTestSchedule?api-version=2016-02-01.3.0', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 01 Apr 2016 05:56:05 GMT',
  etag: '0x8D359F2507F8447',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '3bdc028d-9db4-47d7-8430-d0c07bb68b94',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule',
  date: 'Fri, 01 Apr 2016 05:56:05 GMT',
  connection: 'close' });
 return result; }]];