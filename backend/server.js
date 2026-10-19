const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express(); // an onject name app of the express.js

// not a backend dev to explain these 2 line nor a nodejs one
app.use(express.json()); 
app.use(cors()); 

//
mongoose
  // URGENT replce "127.0.0.1" into the define docker network
  .connect("mongodb://127.0.0.1:27017/docker-app")

  // this is a promise which is basicly try catch but but function way

  .then(
    // this is anonymous method basic a lambda method
    () => console.log("Connected to MongoDB"),
  )
  .catch((err) => console.error(err));

// creat our database scheme
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
