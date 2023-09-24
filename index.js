const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const db = require("./config/mongoose");

const userSchema = require("./models/Users");

app.use(cors());

app.get("/:phone", async (req, res) => {
  try {
    const number = parseInt(req.params.phone);
    const val = Math.floor(1000 + Math.random() * 9000);

    const filter = { phone: number };
    const update = { phone: number, otp: val };

    let updatedDocument = await userSchema.findOneAndUpdate(filter, update, {
      new: true,
    });

    if (!updatedDocument) {
      const newUser = new userSchema({
        phone: number,
        otp: val,
      });
      updatedDocument = await newUser.save();
    }

    res.json(updatedDocument);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.post('/opt',(req,res)=>{
    console.log(req)
    // const otp = req.body.otp;
    // console.log(otp)
    res.json({otp:'nahi h'})

})

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
