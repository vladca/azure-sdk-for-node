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
 * Initializes a new instance of the ProcessUser class.
 * @constructor
 * Describes the user under which a process is running.
 *
 * @member {string} [userName] User name under which the process is running.
 *
 * @member {string} [userDomain] Domain name for the user.
 *
 */
class ProcessUser {
  constructor() {
  }

  /**
   * Defines the metadata of ProcessUser
   *
   * @returns {object} metadata of ProcessUser
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProcessUser',
      type: {
        name: 'Composite',
        className: 'ProcessUser',
        modelProperties: {
          userName: {
            required: false,
            serializedName: 'userName',
            type: {
              name: 'String'
            }
          },
          userDomain: {
            required: false,
            serializedName: 'userDomain',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ProcessUser;
