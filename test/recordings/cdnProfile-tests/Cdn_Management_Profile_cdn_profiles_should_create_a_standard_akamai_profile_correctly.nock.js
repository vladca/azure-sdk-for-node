// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles/cdnTestProfile3413?api-version=2016-04-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile3413\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles/cdnTestProfile3413\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"EastUs\",\"sku\":{\r\n    \"name\":\"Standard_Akamai\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '403',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '8f7d3dc4-5f59-4877-9bc6-eef4bd98c68d',
  'x-ms-client-request-id': '967199e6-ef2f-4ff2-b10a-7121b99894cd',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/operationresults/a3a76571-df73-4478-984c-b11c169eab00?api-version=2016-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '57db5ec3-6568-4332-824e-d4695409b17f',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T224029Z:57db5ec3-6568-4332-824e-d4695409b17f',
  date: 'Wed, 11 May 2016 22:40:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles/cdnTestProfile3413?api-version=2016-04-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile3413\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles/cdnTestProfile3413\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"EastUs\",\"sku\":{\r\n    \"name\":\"Standard_Akamai\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '403',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '8f7d3dc4-5f59-4877-9bc6-eef4bd98c68d',
  'x-ms-client-request-id': '967199e6-ef2f-4ff2-b10a-7121b99894cd',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/operationresults/a3a76571-df73-4478-984c-b11c169eab00?api-version=2016-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '57db5ec3-6568-4332-824e-d4695409b17f',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T224029Z:57db5ec3-6568-4332-824e-d4695409b17f',
  date: 'Wed, 11 May 2016 22:40:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/operationresults/a3a76571-df73-4478-984c-b11c169eab00?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '9fa30958-1da6-46f7-9f58-5424d71fbfec',
  'x-ms-client-request-id': 'be5e70b9-2c4a-4a35-bb65-cccc8e41e460',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '51618d32-847a-478c-a006-ef4e20538b9f',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T224059Z:51618d32-847a-478c-a006-ef4e20538b9f',
  date: 'Wed, 11 May 2016 22:40:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/operationresults/a3a76571-df73-4478-984c-b11c169eab00?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '9fa30958-1da6-46f7-9f58-5424d71fbfec',
  'x-ms-client-request-id': 'be5e70b9-2c4a-4a35-bb65-cccc8e41e460',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '51618d32-847a-478c-a006-ef4e20538b9f',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T224059Z:51618d32-847a-478c-a006-ef4e20538b9f',
  date: 'Wed, 11 May 2016 22:40:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles/cdnTestProfile3413?api-version=2016-04-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile3413\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles/cdnTestProfile3413\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"EastUs\",\"sku\":{\r\n    \"name\":\"Standard_Akamai\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '402',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'ed0dd748-be68-4dc9-ae3f-ab11e999c9c2',
  'x-ms-client-request-id': '906d8392-aff9-46f3-8cd7-7ca91ba4f15d',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '4aa2c57e-c118-4244-a6c4-63b7cd1d1c60',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T224100Z:4aa2c57e-c118-4244-a6c4-63b7cd1d1c60',
  date: 'Wed, 11 May 2016 22:40:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles/cdnTestProfile3413?api-version=2016-04-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile3413\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles/cdnTestProfile3413\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"EastUs\",\"sku\":{\r\n    \"name\":\"Standard_Akamai\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '402',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'ed0dd748-be68-4dc9-ae3f-ab11e999c9c2',
  'x-ms-client-request-id': '906d8392-aff9-46f3-8cd7-7ca91ba4f15d',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '4aa2c57e-c118-4244-a6c4-63b7cd1d1c60',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T224100Z:4aa2c57e-c118-4244-a6c4-63b7cd1d1c60',
  date: 'Wed, 11 May 2016 22:40:59 GMT',
  connection: 'close' });
 return result; }]];