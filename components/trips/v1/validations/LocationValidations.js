const validator = require('validator');

module.exports = body => {
  let error = {};
  // Checking the needed body elements
  body.location = _.isEmpty(body.location) ? '' : body.location;

  if (_.isEmpty(body.location)) error.location = 'location is required';

  return { error: _.isEmpty(error) ? undefined : error };
};
