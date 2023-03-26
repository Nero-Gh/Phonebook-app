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

//Geting data from the database by id
router.get("/get-phone/:id", phoneBookController.getContactById);

//Updating data from the database by id
router.put("/update-phone/:id", phoneBookController.updateContactById);

//Deleting data from the database by id
router.delete("/delete-phone/:id", phoneBookController.deleteContact);

module.exports = router;
