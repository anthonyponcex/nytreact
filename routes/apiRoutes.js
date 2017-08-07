var express = require("express");

var articleController = require("../controllers/articleController");

var router = new express.Router();

// Get all saved artickes 
router.get("/", articleController.index);
// Save a new article
router.post("/articles/:id", articleController.create);
// Delete a specific article
router.delete("/articles/:id", articleController.destroy);

module.exports = router;
