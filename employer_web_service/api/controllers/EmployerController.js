/**
 * EmployerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  createEmployee: function (req, res) {
     var name=req.body.name;
     var email=req.body.email;
     var password=req.body.password;
     var length=req.body.employeeLength
     var salary=req.body.employeesalary

     var options = {
         employeeName: name,
         employeeEmail: email,
         employeePassword: password,
         employeeLength: length,
         employeeSalary: salary
        };
   Employer.create(options).fetch().exec(function (err, data) {
   if (err) return (err);
   return res.json(data);
   });
   },


  getEmployee: function (req, res) {
    var email=req.body.email;
    var password=req.body.password;
    query = { "employeeEmail": email,
              "employeePassword": password }
    Employer.find(query).exec(function (err, data) {
    var i  = data.length;
    if(i==0)
      {
      res.status(401);
      res.send('Invalid username or password');
      }
    else{
      return res.json(data);
      }
    if (err) return (err);

    });
    },



  employersideAuthenticate: function (req, res) {
  var email=req.body.email;
  var password=req.body.password;
  query = { "employeeEmail": email,
            "employeePassword": password }
  Employer.find(query).exec(function (err, data) {
  sails.log(data);
  var i  = data.length;
  if(i==0)
  {
  res.status(401);
  res.send('Invalid username or password');
  }
  else{
  //  res.status(200);
    return res.status(200).json({ authenticated: 'true', name: data[0].employeeName});
    //res.send('Login Successful -- Welcome :'+ data[0].employeeName);
  }
  sails.log(i);
  if (err) return (err);
  });
  },



};
