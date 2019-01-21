const { Service } = require("./services");

// @route   GET api/survey
// @desc    get all
exports.getAll = async (req, res, next) => {

  const result = await Service.getAll();

  if (result.error)
    return res
      .status(result.error.statusCode)
      .json({ error: result.error.message });

  return res.status(200).json({ data: result , sucess: true});
};

// @route   GET api/survey/:id
// @desc    get one
exports.getOne = async (req, res, next) => {
  const id = req.params.id;

  // Get
  const result = await Service.getOne(id);

  if (result.error)
    return res
      .status(result.error.statusCode)
      .json({ error: result.error.message });

  // return ok
  return res.status(200).json({ data: result , sucess: true});
};

// @route   POST api/survey
// @desc    add one
exports.add = async (req, res, next) => {
  // Add one
  const result = await Service.addOne(req.body);

  if (result.error)
    return res
      .status(result.error.statusCode)
      .json({ error: result.error.message });

  // return ok
  return res.status(201).json({ data: result });
};

// @route   PUT api/survey/:id
// @desc    edit one
exports.edit = async (req, res, next) => {
  const id = req.params.id;
  // Update one
  const result = await Service.updateOne(id, req.body);
  if (result.error)
    return res
      .status(result.error.statusCode)
      .json({ error: result.error.message });

  // return ok
  return res.status(200).json({ result: result.data });
};

// @route   DELETE api/survey/:id
// @desc    delete one
exports.delete = async (req, res, next) => {
  const id = req.params.id;

  // Delete one
  const result = await Service.deleteOne(id);

  if (result.error)
    return res
      .status(result.error.statusCode)
      .json({ error: result.error.message });

  // return ok
  return res.status(200).json({ result: result.data });
};

exports.addLocation = async (req, res, next) => {
  const id = req.params.id;
  // Update one
  const result = await Service.addLocation(id, req.body);
  if (result.error)
    return res
      .status(result.error.statusCode)
      .json({ error: result.error.message });

  // return ok
  return res.status(200).json({ result: result.data });
};
