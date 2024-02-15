const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const db = require("./config/mongoose");
const userSchema = require("./models/Users");

// Middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

// GET route for generating OTP and registering users
app.get("/:phone", async (req, res) => {
  try {
    // Extract phone number from URL parameter
    const number = parseInt(req.params.phone);

    // Generate a random OTP
    const otp = Math.floor(1000 + Math.random() * 9000);

    // Define the filter and update objects for findOneAndUpdate
    const filter = { phone: number };
    const update = { phone: number, otp };

    // Try to find and update the user, or create a new user if not found
    let updatedDocument = await userSchema.findOneAndUpdate(filter, update, {
      new: true,
    });

    if (!updatedDocument) {
      // If the user was not found, create a new user
      const newUser = new userSchema({
        phone: number,
        otp,
      });
      updatedDocument = await newUser.save();
    }

    // Respond with the updated or newly created user
    res.json(updatedDocument);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST route for OTP verification
app.post("/opt", (req, res) => {
  try {
    // Extract the values of the first 4 keys from the request body
    const otpValues = Object.values(req.body).slice(0, 4);

    // Concatenate the values to form a single string
    const combinedValue = parseInt(otpValues.join(""));

    // Find the user by phone number
    userSchema
      .findOne({ phone: req.body.number })
      .then((document) => {
        // Check if the OTP matches the one stored in the database
        if (document.otp === combinedValue) {
          res.json({ verification: "success" });
        } else {
          res.json({ verification: "fail" });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        res.json({ message: "Some internal error occurred 😢😢😢😢!" });
      });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
