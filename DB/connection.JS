const mongoose = require("mongoose");

const URI =
  "mongodb+srv://12345:12345@cluster0.uxxsa.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Connection Established");
};

module.exports = connectDB;
