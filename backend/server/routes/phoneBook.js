const express = require("express");
const router = express.Router();
const phoneBookController = require("../controllers/phoneBookController");

/**
 * Settinng up the routes
 */

// Adding post route to be ble to add new contact
router.post("/api/add-phone", phoneBookController.addContact);

//Geting data from the database
router.get("/api/get-phone", phoneBookController.getContact);

//Updating data from the database by id
router.put("/api/get-phone/:id", phoneBookController.updateContactById);

//Deleting data from the database by id
router.delete("/api/delete-phone/:id", phoneBookController.deleteContact);

module.exports = router;
