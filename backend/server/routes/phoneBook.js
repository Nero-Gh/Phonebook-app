const express = require("express");
const router = express.Router();
const phoneBookController = require("../controllers/phoneBookController");

/**
 * Settinng up the routes
 */

//Geting data from the database
router.get("/get-phone", phoneBookController.getContact);

// Adding post route to be ble to add new contact
router.post("/add-phone", phoneBookController.addContact);

//Updating data from the database by id
router.put("/update/:id", phoneBookController.updateContactById);

//Deleting data from the database by id
router.delete("/delete/:id", phoneBookController.deleteContact);

module.exports = router;
