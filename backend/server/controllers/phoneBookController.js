const mongoose = require("mongoose");
const phoneBook = require("../models/PhoneBook");

/**
 * Creating post to add new contact
 */

exports.addContact = async (req, res) => {
  const phoneNumber = new phoneBook(req.body);

  try {
    await phoneNumber.save();
    res.status(201).json({
      status: "Success",
      data: {
        phoneNumber,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
};

/**
 * Getting data from the database
 */

exports.getContact = async (req, res) => {
  const phoneNumbers = await phoneBook.find({});
  try {
    res.status(200).json({
      status: "Success",
      data: {
        phoneNumbers,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
};

/**
 * Updating data from the database by id
 */

exports.updateContactById = async (req, res) => {
  const updatedPhone = await phoneBook.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  try {
    res.status(200).json({
      status: "Success",
      data: {
        updatedPhone,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

/**
 * Deleting data from the database by id
 */

exports.deleteContact = async (req, res) => {
  await phoneBook.findByIdAndDelete({ _id: req.params.id });

  try {
    res.status(204).json({
      status: "Content Deleted Successfully",
      data: {},
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
};
