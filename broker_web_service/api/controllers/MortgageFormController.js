/**
 * MortgageFormController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  createApplication: function (req, res) {
   var name=req.body.name;
   var address=req.body.address;
   var phone=req.body.phone;
   var email=req.body.email
   var password=(Math.random()*1e12).toString(36);
   var appNum = "MBR" + Math.floor(100000 + Math.random() * 900000)
   //sails.log(password);
  // sails.log(address);
  // sails.log('sasas');
   var options = {
       name: name,
       address: address,
       phone: phone,
       email: email,
       password: password,
       applicationID :appNum
      };
 MortgageForm.create(options).fetch().exec(function (err, data) {
  var i = data.applicationID;
 MortgageAdditional.create({
                   applicationStatus: "Pending",
                   applicationNumber: i
               }).exec(function (err, created){ });
 if (err) return (err);
 return res.json(data);
 });
 },



 brokersideAuthenticate: function (req, res) {
 var email=req.body.email;
 var password=req.body.password;
 query = { "email": email,
            "password": password }
 MortgageForm.find(query).exec(function (err, data) {
 //  sails.log(data[0].id);
 var i  = data.length;
 if(i==0)
 {
 res.status(401);
 res.send('Invalid username or password');
 }
 else{
// res.status(200);
 return res.status(200).json({ authenticated: 'true', name: data[0].name, applicationNumber: data[0].applicationID });
// res.send('Login Successful -- Welcome :'+ data[0].name);
 }
 sails.log(i);
 if (err) return (err);
 });
 },



}
