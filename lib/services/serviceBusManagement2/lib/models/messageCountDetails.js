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
 * Initializes a new instance of the MessageCountDetails class.
 * @constructor
 * Message Count Details.
 *
 * @member {number} [activeMessageCount] Number of active messages in the
 * queue, topic, or subscription.
 *
 * @member {number} [deadLetterMessageCount] Number of messages that are dead
 * lettered.
 *
 * @member {number} [scheduledMessageCount] Number of scheduled messages.
 *
 * @member {number} [transferDeadLetterMessageCount] Number of messages
 * transferred into dead letters.
 *
 * @member {number} [transferMessageCount] Number of messages transferred to
 * another queue, topic, or subscription.
 *
 */
class MessageCountDetails {
  constructor() {
  }

  /**
   * Defines the metadata of MessageCountDetails
   *
   * @returns {object} metadata of MessageCountDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MessageCountDetails',
      type: {
        name: 'Composite',
        className: 'MessageCountDetails',
        modelProperties: {
          activeMessageCount: {
            required: false,
            readOnly: true,
            serializedName: 'activeMessageCount',
            type: {
              name: 'Number'
            }
          },
          deadLetterMessageCount: {
            required: false,
            readOnly: true,
            serializedName: 'deadLetterMessageCount',
            type: {
              name: 'Number'
            }
          },
          scheduledMessageCount: {
            required: false,
            readOnly: true,
            serializedName: 'scheduledMessageCount',
            type: {
              name: 'Number'
            }
          },
          transferDeadLetterMessageCount: {
            required: false,
            readOnly: true,
            serializedName: 'transferDeadLetterMessageCount',
            type: {
              name: 'Number'
            }
          },
          transferMessageCount: {
            required: false,
            readOnly: true,
            serializedName: 'transferMessageCount',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = MessageCountDetails;
