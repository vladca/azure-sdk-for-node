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
 * Initializes a new instance of the SimpleSchedulePolicy class.
 * @constructor
 * Simple policy schedule.
 *
 * @member {string} [scheduleRunFrequency] Defines the frequency interval
 * (daily or weekly) for the schedule policy. Possible values include:
 * 'Invalid', 'Daily', 'Weekly'
 *
 * @member {array} [scheduleRunDays] This list is the days of the week when the
 * schedule runs.
 *
 * @member {array} [scheduleRunTimes] List of times, during a day, when the
 * schedule runs.
 *
 * @member {number} [scheduleWeeklyFrequency] The number of times per week the
 * schedule runs.
 *
 */
class SimpleSchedulePolicy extends models['SchedulePolicy'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SimpleSchedulePolicy
   *
   * @returns {object} metadata of SimpleSchedulePolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SimpleSchedulePolicy',
      type: {
        name: 'Composite',
        className: 'SimpleSchedulePolicy',
        modelProperties: {
          schedulePolicyType: {
            required: true,
            serializedName: 'schedulePolicyType',
            type: {
              name: 'String'
            }
          },
          scheduleRunFrequency: {
            required: false,
            serializedName: 'scheduleRunFrequency',
            type: {
              name: 'Enum',
              allowedValues: [ 'Invalid', 'Daily', 'Weekly' ]
            }
          },
          scheduleRunDays: {
            required: false,
            serializedName: 'scheduleRunDays',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DayOfWeekElementType',
                  type: {
                    name: 'Enum',
                    allowedValues: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
                  }
              }
            }
          },
          scheduleRunTimes: {
            required: false,
            serializedName: 'scheduleRunTimes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DateElementType',
                  type: {
                    name: 'DateTime'
                  }
              }
            }
          },
          scheduleWeeklyFrequency: {
            required: false,
            serializedName: 'scheduleWeeklyFrequency',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = SimpleSchedulePolicy;
