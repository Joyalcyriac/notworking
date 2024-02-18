const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Login = require("./loginback");

const Workermodel=require('./WorkerReg')
const multer = require('multer');

// MongoDB connection setup
mongoose.connect("mongodb+srv://jerin:jerin@cluster0.vlqctt0.mongodb.net/worker-client?retryWrites=true&w=majority")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Endpoint for user signup
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user with provided email already exists
    const user = await Login.findOne({ email: email });
    if (user) {
      // User already exists
      res.send("exist");
    } else {
      // User doesn't exist, create a new user
      await Login.create({ email: email, password: password });
      res.send("notexist");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get('/view', async (request, response) => {
    var data = await Workermodel.find();
    // console.log(data)
    response.send(data)
})


// Start the server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
