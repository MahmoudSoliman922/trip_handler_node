const mongoose = require("mongoose");

const { Schema } = mongoose;

const trips = new Schema(
  {
    from: {
      type: String,
    },
    to: {
      type: String,
    },
    status: {
      type: String,
    },
    location: [
      {
        type: String,
      }
    ],
  },
  {
    timestamps: true,
    autoIndex: true
  }
);

module.exports = mongoose.model("Trip", trips);
