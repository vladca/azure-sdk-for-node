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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * Operation.
 *
 * @member {string} [id] Operation ID.
 *
 * @member {string} [name] Operation name.
 *
 * @member {string} [status] The current status of the operation. Possible
 * values include: 'InProgress', 'Failed', 'Succeeded', 'TimedOut', 'Created'
 *
 * @member {array} [errors] Any errors associate with the operation.
 *
 * @member {date} [createdTime] Time when operation has started.
 *
 * @member {date} [modifiedTime] Time when operation has been updated.
 *
 * @member {date} [expirationTime] Time when operation will expire.
 *
 * @member {string} [geoMasterOperationId] Applicable only for stamp operation
 * ids.
 *
 */
class Operation {
  constructor() {
  }

  /**
   * Defines the metadata of Operation
   *
   * @returns {object} metadata of Operation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Operation',
      type: {
        name: 'Composite',
        className: 'Operation',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'Enum',
              allowedValues: [ 'InProgress', 'Failed', 'Succeeded', 'TimedOut', 'Created' ]
            }
          },
          errors: {
            required: false,
            serializedName: 'errors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ErrorEntityElementType',
                  type: {
                    name: 'Composite',
                    className: 'ErrorEntity'
                  }
              }
            }
          },
          createdTime: {
            required: false,
            serializedName: 'createdTime',
            type: {
              name: 'DateTime'
            }
          },
          modifiedTime: {
            required: false,
            serializedName: 'modifiedTime',
            type: {
              name: 'DateTime'
            }
          },
          expirationTime: {
            required: false,
            serializedName: 'expirationTime',
            type: {
              name: 'DateTime'
            }
          },
          geoMasterOperationId: {
            required: false,
            serializedName: 'geoMasterOperationId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Operation;
