const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

//we need to next here so that we can make the catch async fun works.
exports.getOverview = catchAsync(async (req, res, next) => {
  //1) Get tour data from collection
  const tours = await Tour.find();

  //2) Build template

  //3) Render that template using tour data from

  res.status(200).render('overview', {
    title: 'All Tours',
    tours: tours,
  });
});

exports.getTour = async (req, res) => {
  //1) Get the data, for the requested tour (including reviews and guides)
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews', // name of the field that we want to populate
    fields: 'review rating user', //fields that we want to select from the reviews.
  });
  //2) Build template

  //3) Render template using data from 1)

  res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour: tour,
  });
};
