const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingController.createListing));

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Category Routes
router.get("/categories/trending", wrapAsync(listingController.trending));
router.get("/categories/rooms", wrapAsync(listingController.rooms));
router.get("/categories/mountains", wrapAsync(listingController.mountains));
router.get("/categories/cabins", wrapAsync(listingController.cabins));
router.get("/categories/beach", wrapAsync(listingController.beach));
router.get("/categories/camping", wrapAsync(listingController.camping));
router.get("/categories/villas", wrapAsync(listingController.villas));
router.get("/categories/adventure", wrapAsync(listingController.adventure));
router.get("/categories/iconic", wrapAsync(listingController.iconic));

router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;