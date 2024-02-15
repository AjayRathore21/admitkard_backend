const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ajaykumar420ak79:vSiuKI2mVNzzcaK0@admitkardcluster.aiyol0u.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  // "mongodb+srv://ajaykumar420ak79:<password>@admitkardcluster.aiyol0u.mongodb.net/?retryWrites=true&w=majority"
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});
