// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles/cdnTestProfile4304?api-version=2016-04-02', '*')
  .reply(202, "{\r\n  \"name\":\"cdnTestProfile4304\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles/cdnTestProfile4304\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\",\"tag3\":\"val3\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '417',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/operationresults/3a4518a1-fe75-44bf-a1b1-9846e1749dad/profileresults/cdnTestProfile4304?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': '199af702-a714-4b51-96b0-d1499f3cd4a3',
  'x-ms-client-request-id': 'a4574d8e-64eb-415f-a599-2bfc77e70d91',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/operationresults/3a4518a1-fe75-44bf-a1b1-9846e1749dad?api-version=2016-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'b6b20c75-839a-451d-bd64-036e050d5007',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T223744Z:b6b20c75-839a-451d-bd64-036e050d5007',
  date: 'Wed, 11 May 2016 22:37:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles/cdnTestProfile4304?api-version=2016-04-02', '*')
  .reply(202, "{\r\n  \"name\":\"cdnTestProfile4304\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles/cdnTestProfile4304\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\",\"tag3\":\"val3\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '417',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/operationresults/3a4518a1-fe75-44bf-a1b1-9846e1749dad/profileresults/cdnTestProfile4304?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': '199af702-a714-4b51-96b0-d1499f3cd4a3',
  'x-ms-client-request-id': 'a4574d8e-64eb-415f-a599-2bfc77e70d91',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/operationresults/3a4518a1-fe75-44bf-a1b1-9846e1749dad?api-version=2016-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'b6b20c75-839a-451d-bd64-036e050d5007',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T223744Z:b6b20c75-839a-451d-bd64-036e050d5007',
  date: 'Wed, 11 May 2016 22:37:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/operationresults/3a4518a1-fe75-44bf-a1b1-9846e1749dad?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '5d31c6f6-865f-4109-b109-9d8af790a9b7',
  'x-ms-client-request-id': '9e109d4c-0c15-4c6d-b8d3-c417b3e821f9',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'df2cf230-65b8-4327-9981-f28953c1b914',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T223814Z:df2cf230-65b8-4327-9981-f28953c1b914',
  date: 'Wed, 11 May 2016 22:38:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/operationresults/3a4518a1-fe75-44bf-a1b1-9846e1749dad?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '5d31c6f6-865f-4109-b109-9d8af790a9b7',
  'x-ms-client-request-id': '9e109d4c-0c15-4c6d-b8d3-c417b3e821f9',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'df2cf230-65b8-4327-9981-f28953c1b914',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T223814Z:df2cf230-65b8-4327-9981-f28953c1b914',
  date: 'Wed, 11 May 2016 22:38:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles/cdnTestProfile4304?api-version=2016-04-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile4304\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles/cdnTestProfile4304\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\",\"tag3\":\"val3\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '417',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'a0487bea-22e2-47aa-b356-335eac9fa619',
  'x-ms-client-request-id': '6d951e17-09b7-4b8f-9ddf-74e7b8deb3b1',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'ffcfaf49-61da-4e36-bc8f-f51b26317163',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T223815Z:ffcfaf49-61da-4e36-bc8f-f51b26317163',
  date: 'Wed, 11 May 2016 22:38:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles/cdnTestProfile4304?api-version=2016-04-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile4304\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles/cdnTestProfile4304\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\",\"tag3\":\"val3\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '417',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'a0487bea-22e2-47aa-b356-335eac9fa619',
  'x-ms-client-request-id': '6d951e17-09b7-4b8f-9ddf-74e7b8deb3b1',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'ffcfaf49-61da-4e36-bc8f-f51b26317163',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T223815Z:ffcfaf49-61da-4e36-bc8f-f51b26317163',
  date: 'Wed, 11 May 2016 22:38:15 GMT',
  connection: 'close' });
 return result; }]];