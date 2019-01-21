const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const expressHandleBars = require("express-handlebars");
const cors = require("cors");

const ErrorHandler = require("../middlewares/errorHandlerMiddleware");

module.exports = app => {
  app.use(logger("dev"));
  app.use(express.static("uploads"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(fileUpload());
  app.use(cookieParser());
  app.use(cors());

  app.use(ErrorHandler);

  // ! TODO: make sure if this will not return a 404 error

  app.use(express.static(path.join(__dirname, "/views/public")));
  app.use(express.static(path.join(__dirname, "/views/uploads")));
  app.engine(
    ".hbs",
    expressHandleBars({
      defaultLayout: "main",
      extname: ".hbs",
      layoutsDir: path.join(__dirname, "views")
    })
  );
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", ".hbs");
};
