var mongoose = require('mongoose');
mongoose.Promise = Promise;
var con2=mongoose.createConnection('mongodb://0.0.0.0:27017/mydb',
  {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  },
  function (err, db) {
    console.log("MasterDB Connected successfully");
  }
);
module.exports =exports=con2;