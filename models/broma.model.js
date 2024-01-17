const mongoose = require("mongoose");

const BromaSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "setup is requerid"],
      minLength: [10, "No joke can be that short "], //debe tener minimo 10 caracteres
    },
    punchline: {
      type: String,
      requerid: [true, "Punchiline is mandatory"],
      minLength: [3, "Less than 3 is not funny"],
    },
  },
  { timestamps: true }
);

const Broma = new mongoose.model("Broma", BromaSchema);

module.exports = Broma;
