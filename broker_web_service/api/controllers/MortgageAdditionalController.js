/**
 * MortgageAdditionalController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  updateApplication: function (req, res) {
   query = { "applicationNumber": req.param('applicationNumber') }
   var salary=req.body.salary;
   var length=req.body.Employeelength;
   var options = {
       employeeSalary: salary,
       employeeLength: length,
       applicationStatus: "Approved"
      };
  MortgageAdditional.update(query,options).fetch().exec(function (err, data) {
  if (err) return (err);
  return res.json(data);
  });
  },


  getStatus: function (req, res) {
  query = { "applicationNumber": req.param('applicationNumber') }
  MortgageAdditional.find(query).exec(function (err, data) {
//  sails.log(data[0].id);
  if (err) return (err);
  return res.json(data[0].applicationStatus);
  });
  },


  }
