const express = require("express");
const router = express.Router();
const phoneBookController = require("../controllers/phoneBookController");

/**
 * Settinng up the routes
 */

// Adding post route to be ble to add new contact
router.post("/add-phone", phoneBookController.addContact);

//Geting data from the database
router.get("/get-phone", phoneBookController.getContact);

//Updating data from the database by id
router.patch("/get-phone/:id", phoneBookController.getContactById);

//Deleting data from the database by id
router.delete("/get-phone/:id", phoneBookController.deleteContact);

module.exports = router;
