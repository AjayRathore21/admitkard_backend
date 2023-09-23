const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());

app.get("/:phone", (req, res) => {
  console.log(req.params.phone, "body at 7");
  console.log(typeof parseInt(req.params.phone));
  var val = Math.floor(1000 + Math.random() * 9000);
  console.log(val, "10");
  const otp = {
    otp: val,
  };

  res.send(JSON.stringify(otp));
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
