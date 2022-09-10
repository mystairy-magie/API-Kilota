const mongoose = require('mongoose');

mongoose.connect(
  "mongodb://127.0.0.1/kilota-api",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Mongodb connected");
    else console.log("Connection error :" + err);
  }
)