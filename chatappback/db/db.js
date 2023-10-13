var mongoose = require('mongoose');
mongoose.Promise = Promise;
var con1=mongoose.createConnection('mongodb://0.0.0.0:27017/chatapp',
  {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  },
  function (err, db) {
    console.log("chatapp Connected successfully");
  }
);
module.exports =exports=con1;