/**
 * Employer.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    datastore: 'mysql',
    tableName : 'Employer',
    primaryKey: 'id',
    attributes: {

      id : {
       type : 'number',
       unique : true,
       autoIncrement : true
     },
     employeeEmail: {
       type: 'string'
     },
     employeePassword: {
       type: 'string'
     },
      employeeSalary: {
        type: 'string'
      },
      employeeName: {
        type: 'string'
      },
      employeeLength: {
        type: 'string'
      }
    }
  };
