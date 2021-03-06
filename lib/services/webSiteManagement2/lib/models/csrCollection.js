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

/**
 * @class
 * Initializes a new instance of the CsrCollection class.
 * @constructor
 * Collection of CSRs.
 *
 * @member {string} [nextLink] Link to next page of resources.
 *
 */
class CsrCollection extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of CsrCollection
   *
   * @returns {object} metadata of CsrCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CsrCollection',
      type: {
        name: 'Composite',
        className: 'CsrCollection',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CsrElementType',
                  type: {
                    name: 'Composite',
                    className: 'Csr'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CsrCollection;
