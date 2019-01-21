const validator = require('validator');

module.exports = body => {
  let error = {};
  // Checking the needed body elements
  body.from = _.isEmpty(body.from) ? '' : body.from;
  body.to = _.isEmpty(body.to) ? '' : body.to;
  body.status = _.isEmpty(body.status) ? '' : body.status;

  if (_.isEmpty(body.from)) error.from = 'from is required';
  if (_.isEmpty(body.to)) error.to = 'to is required';
  if (_.isEmpty(body.status)) error.status = 'status is required';

  return { error: _.isEmpty(error) ? undefined : error };
};
