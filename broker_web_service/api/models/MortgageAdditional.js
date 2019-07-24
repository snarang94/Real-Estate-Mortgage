/**
 * MortgageAdditional.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    datastore: 'mysql',
    tableName : 'BrokerAdditional',
    primaryKey: 'id',
    attributes: {

      id : {
       type : 'number',
       unique : true,
       autoIncrement : true
     },

      employeeSalary: {
        type: 'string'
      },
      applicationStatus: {
        type: 'string'
      },
      employeeLength: {
        type: 'string'
      },
      employeeLength: {
        type: 'string'
      },
      applicationNumber: {
        type: 'string'
      }
    }
  };
