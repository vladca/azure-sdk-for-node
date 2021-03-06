/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const msRest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const WebResource = msRest.WebResource;

/**
 * Gets the primary and secondary admin API keys for the specified Azure Search
 * service.
 *
 * @param {string} resourceGroupName The name of the resource group within the
 * current subscription. You can obtain this value from the Azure Resource
 * Manager API or the portal.
 *
 * @param {string} searchServiceName The name of the Azure Search service
 * associated with the specified resource group.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.searchManagementRequestOptions] Additional
 * parameters for the operation
 *
 * @param {uuid} [options.searchManagementRequestOptions.clientRequestId] A
 * client-generated GUID value that identifies this request. If specified, this
 * will be included in response information as a way to track the request.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link AdminKeyResult} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _get(resourceGroupName, searchServiceName, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let searchManagementRequestOptions = (options && options.searchManagementRequestOptions !== undefined) ? options.searchManagementRequestOptions : undefined;
  // Validate
  try {
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (searchServiceName === null || searchServiceName === undefined || typeof searchServiceName.valueOf() !== 'string') {
      throw new Error('searchServiceName cannot be null or undefined and it must be of type string.');
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }
  let clientRequestId;
  try {
    if (searchManagementRequestOptions !== null && searchManagementRequestOptions !== undefined)
    {
      clientRequestId = searchManagementRequestOptions.clientRequestId;
      if (clientRequestId !== null && clientRequestId !== undefined && !(typeof clientRequestId.valueOf() === 'string' && msRest.isValidUuid(clientRequestId))) {
        throw new Error('clientRequestId must be of type string and must be a valid uuid.');
      }
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/listAdminKeys';
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{searchServiceName}', encodeURIComponent(searchServiceName));
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if (clientRequestId !== undefined && clientRequestId !== null) {
    httpRequest.headers['x-ms-client-request-id'] = clientRequestId.toString();
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['CloudError']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['AdminKeyResult']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * Regenerates either the primary or secondary admin API key. You can only
 * regenerate one key at a time.
 *
 * @param {string} resourceGroupName The name of the resource group within the
 * current subscription. You can obtain this value from the Azure Resource
 * Manager API or the portal.
 *
 * @param {string} searchServiceName The name of the Azure Search service
 * associated with the specified resource group.
 *
 * @param {string} keyKind Specifies which key to regenerate. Valid values
 * include 'primary' and 'secondary'. Possible values include: 'primary',
 * 'secondary'
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.searchManagementRequestOptions] Additional
 * parameters for the operation
 *
 * @param {uuid} [options.searchManagementRequestOptions.clientRequestId] A
 * client-generated GUID value that identifies this request. If specified, this
 * will be included in response information as a way to track the request.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link AdminKeyResult} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _regenerate(resourceGroupName, searchServiceName, keyKind, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let searchManagementRequestOptions = (options && options.searchManagementRequestOptions !== undefined) ? options.searchManagementRequestOptions : undefined;
  // Validate
  try {
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (searchServiceName === null || searchServiceName === undefined || typeof searchServiceName.valueOf() !== 'string') {
      throw new Error('searchServiceName cannot be null or undefined and it must be of type string.');
    }
    if (keyKind) {
      let allowedValues = [ 'primary', 'secondary' ];
      if (!allowedValues.some( function(item) { return item === keyKind; })) {
        throw new Error(keyKind + ' is not a valid value. The valid values are: ' + allowedValues);
      }
    } else {
      throw new Error('keyKind cannot be null or undefined.');
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }
  let clientRequestId;
  try {
    if (searchManagementRequestOptions !== null && searchManagementRequestOptions !== undefined)
    {
      clientRequestId = searchManagementRequestOptions.clientRequestId;
      if (clientRequestId !== null && clientRequestId !== undefined && !(typeof clientRequestId.valueOf() === 'string' && msRest.isValidUuid(clientRequestId))) {
        throw new Error('clientRequestId must be of type string and must be a valid uuid.');
      }
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/regenerateAdminKey/{keyKind}';
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{searchServiceName}', encodeURIComponent(searchServiceName));
  requestUrl = requestUrl.replace('{keyKind}', encodeURIComponent(keyKind));
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if (clientRequestId !== undefined && clientRequestId !== null) {
    httpRequest.headers['x-ms-client-request-id'] = clientRequestId.toString();
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['CloudError']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['AdminKeyResult']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @class
 * AdminKeys
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SearchManagementClient.
 * Initializes a new instance of the AdminKeys class.
 * @constructor
 *
 * @param {SearchManagementClient} client Reference to the service client.
 */
class AdminKeys {
  constructor(client) {
    this.client = client;
    this._get = _get;
    this._regenerate = _regenerate;
  }

  /**
   * Gets the primary and secondary admin API keys for the specified Azure Search
   * service.
   *
   * @param {string} resourceGroupName The name of the resource group within the
   * current subscription. You can obtain this value from the Azure Resource
   * Manager API or the portal.
   *
   * @param {string} searchServiceName The name of the Azure Search service
   * associated with the specified resource group.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.searchManagementRequestOptions] Additional
   * parameters for the operation
   *
   * @param {uuid} [options.searchManagementRequestOptions.clientRequestId] A
   * client-generated GUID value that identifies this request. If specified, this
   * will be included in response information as a way to track the request.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<AdminKeyResult>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getWithHttpOperationResponse(resourceGroupName, searchServiceName, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._get(resourceGroupName, searchServiceName, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Gets the primary and secondary admin API keys for the specified Azure Search
   * service.
   *
   * @param {string} resourceGroupName The name of the resource group within the
   * current subscription. You can obtain this value from the Azure Resource
   * Manager API or the portal.
   *
   * @param {string} searchServiceName The name of the Azure Search service
   * associated with the specified resource group.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.searchManagementRequestOptions] Additional
   * parameters for the operation
   *
   * @param {uuid} [options.searchManagementRequestOptions.clientRequestId] A
   * client-generated GUID value that identifies this request. If specified, this
   * will be included in response information as a way to track the request.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {AdminKeyResult} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AdminKeyResult} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  get(resourceGroupName, searchServiceName, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._get(resourceGroupName, searchServiceName, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._get(resourceGroupName, searchServiceName, options, optionalCallback);
    }
  }

  /**
   * Regenerates either the primary or secondary admin API key. You can only
   * regenerate one key at a time.
   *
   * @param {string} resourceGroupName The name of the resource group within the
   * current subscription. You can obtain this value from the Azure Resource
   * Manager API or the portal.
   *
   * @param {string} searchServiceName The name of the Azure Search service
   * associated with the specified resource group.
   *
   * @param {string} keyKind Specifies which key to regenerate. Valid values
   * include 'primary' and 'secondary'. Possible values include: 'primary',
   * 'secondary'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.searchManagementRequestOptions] Additional
   * parameters for the operation
   *
   * @param {uuid} [options.searchManagementRequestOptions.clientRequestId] A
   * client-generated GUID value that identifies this request. If specified, this
   * will be included in response information as a way to track the request.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<AdminKeyResult>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  regenerateWithHttpOperationResponse(resourceGroupName, searchServiceName, keyKind, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._regenerate(resourceGroupName, searchServiceName, keyKind, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Regenerates either the primary or secondary admin API key. You can only
   * regenerate one key at a time.
   *
   * @param {string} resourceGroupName The name of the resource group within the
   * current subscription. You can obtain this value from the Azure Resource
   * Manager API or the portal.
   *
   * @param {string} searchServiceName The name of the Azure Search service
   * associated with the specified resource group.
   *
   * @param {string} keyKind Specifies which key to regenerate. Valid values
   * include 'primary' and 'secondary'. Possible values include: 'primary',
   * 'secondary'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.searchManagementRequestOptions] Additional
   * parameters for the operation
   *
   * @param {uuid} [options.searchManagementRequestOptions.clientRequestId] A
   * client-generated GUID value that identifies this request. If specified, this
   * will be included in response information as a way to track the request.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {AdminKeyResult} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AdminKeyResult} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  regenerate(resourceGroupName, searchServiceName, keyKind, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._regenerate(resourceGroupName, searchServiceName, keyKind, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._regenerate(resourceGroupName, searchServiceName, keyKind, options, optionalCallback);
    }
  }

}

module.exports = AdminKeys;
