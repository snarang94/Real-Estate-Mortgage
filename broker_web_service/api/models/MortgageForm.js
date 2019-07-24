/**
 * MortgageForm.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'mysql',
  tableName : 'BrokerForm',
  primaryKey: 'id',

  attributes: {
    id: {
     type : 'number',
     autoIncrement : true
    // columnName: 'applicationID'
   },
    name: {
      type: 'string'
    },
    address: {
      type: 'string'
    },
    phone: {
      type: 'number'
    },

    email: {
      type: 'string'
    },

    password: {
      type: 'string'
    },

    applicationID: {
      type: 'string'
    }

  }
};
