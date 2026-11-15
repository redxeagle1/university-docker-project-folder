const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express(); // an object name app of the express.js

// not a backend dev to explain these 2 line nor a nodejs one
app.use(express.json()); 
app.use(cors()); 

//
mongoose
  // "db" is the MongoDB service name on the shared Docker network (see docker-compose.yml)
  .connect(process.env.MONGO_URL || "mongodb://db:27017/docker-app")

  // this is a promise which is basically try catch but but function way

  .then(
    // this is anonymous method basically a lambda method
    () => console.log("Connected to MongoDB"),
  )
  .catch((err) => console.error(err));

// cheat our database scheme
const Item = mongoose.model("Item", new mongoose.Schema({ name: String }));

// uses the api we made in the frontend to handle the post and get requests
app.get("/api/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});


app.post("/api/items", async (req, res) => {
  const newItem = new Item({ name: req.body.name });
  await newItem.save();
  res.json(newItem);
});

// specify the port of listening
app.listen(3000, () => console.log("Backend server is running on port 3000"));
