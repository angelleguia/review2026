const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//Controller
const Profile = require("./models/user");

const port = 4000;

app.use(cors());
app.use(express.json());

// const name = req.body.title
app.post("/api/profiles", async (req, res, next) => {
  try {
    console.log("BODY:", req.body);

    const { id, name, title, bio } = req.body;
    const createdProfile = new Profile({
      id,
      name,
      title,
      bio,
    });
    await createdProfile.save();

    res.status(201).json({ profile: createdProfile });
  } catch (err) {
    next(err);
  }
});

//DUMMY_PROFILES.push(createdProfile); //unshift(createdProfile);

//Return profileS
app.get("/api/profiles/", async (req, res) => {
  try {
    const profiles = await Profile.find();
    return res.status(200).json({ profiles });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

//Return each profile by id
app.get("/api/profiles/:id", async (req, res) => {
  try {
    const profile = await Profile.findOne({ id: req.params.id });

    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    return res.status(200).json({ profile });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://comanderange:comanderange@cluster0.swc1k.mongodb.net/users2026",
  )
  .then(() => {
    app.listen(port, () => console.log(`Listening to Port ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected.");
});
