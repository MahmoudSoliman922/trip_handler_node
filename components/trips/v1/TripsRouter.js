const express = require("express");
const router = express.Router();

const controller = require("./TripsController");
const validator = require("./validations");

// Middlewares
const validate = require("../../../middlewares/validateMiddleware");

// @route   GET api/survey/
// @desc    get all
// !access
router.get("/", controller.getAll);

// @route   GET api/survey/:id
// @desc    get one
// !access
router.get("/:id", controller.getOne);

// @route   POST api/survey/
// @desc    add one
// !access
router.post(
  "/",
  validate(validator.TripValidator),
  controller.add
);

// @route   POST api/survey/
// @desc    add one
// !access
router.put(
  "/location/:id",
  validate(validator.LocationValidator),
  controller.addLocation
);

// @route   PUT api/survey/:id
// @desc    edit one
// !access
router.put(
  "/:id",
  validate(validator.TripValidator),
  controller.edit
);

// @route   DELETE api/survey/:id
// @desc    delete one
// !access
router.delete(
  "/:id", controller.delete
);

module.exports = router;
