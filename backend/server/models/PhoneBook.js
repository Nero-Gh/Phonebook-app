/**
 * Creating a model for phonebook
 */

const mongoose = require("mongoose");

const PhoneBookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

const phone = mongoose.model("PhoneBook", PhoneBookSchema);

module.exports = phone;
