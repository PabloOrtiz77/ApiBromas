const Broma = require("../models/broma.model");

module.exports.getBromas = async (req, res) => {
  try {
    const random = Boolean(req.query?.random);
    const Bromas = await Broma.find();
    if (random) {
      const valorrandom = Math.round(Math.random() * (Bromas.length - 1));
      res.status(200);
      res.json(Bromas[valorrandom]);
      return;
    }
    res.status(200);
    res.json(Bromas);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
module.exports.getBromasId = async (req, res) => {
  try {
    const foundBroma = await Broma.findById(req.params.id);
    res.status(200);
    res.json(foundBroma);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};

module.exports.getBromasRandom = async (req, res) => {
  try {
    const Bromas = await Broma.find();
    const valorrandom = Math.round(Math.random() * (Bromas.length - 1));
    res.status(200);
    res.json(Bromas[valorrandom]);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};

module.exports.createBromas = async (req, res) => {
  try {
    const crearBroma = await Broma.create(req.body);
    res.status(201); //201 significa creado
    res.json(crearBroma);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
module.exports.updateBromas = async (req, res) => {
  try {
    const updateBroma = await Broma.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200); //201 significa creado
    res.json(updateBroma);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
module.exports.deletedateBromas = async (req, res) => {
  try {
    const deleteBroma = await Broma.deleteOne({ _id: req.params.id });
    res.status(200);
    res.json(deleteBroma);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
