const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  id: { type: String, require: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  bio: { type: String, required: true },
});

module.exports = mongoose.model("Profiles", profileSchema);
