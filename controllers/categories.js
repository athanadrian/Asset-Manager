const Category = require('../models/category');

exports.createCategory = async (req, res, next) => {
  try {
    const category = await new Category(req.body).save();
    res.status(200).json({ data: category });
  } catch (err) {
    next(err);
  }
};

exports.readCategories = async (req, res, next) => {
  try {
    const categories = await Category.find().sort('name');
    res.status(200).json({ data: categories });
  } catch (err) {
    next(err);
  }
};
