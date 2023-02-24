const mongoose = require("mongoose");

const loggerSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    minlength: 3,
  },
  waktu_sekarang: {
    type: Date,
    required: true,
    minlength: 3,
  },
});

const Logger = mongoose.model("Logger", loggerSchema);

module.exports = Logger;
