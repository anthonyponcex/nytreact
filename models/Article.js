var mongoose = require("mongoose");

const Schema = mongoose.Schema

const savedSchema = new Schema({
     title: String,
     date: String,
     url: String,
    saved: {
      type: Boolean,
      default: false
    }
});

const Saved = mongoose.model('Saved', savedSchema);

module.exports = Saved;