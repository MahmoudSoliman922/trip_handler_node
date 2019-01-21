// TODO: review

const { logger } = require('../startup/logging');
const CustomError = require('../shared/errors/CustomError');

module.exports = (err, req, res, next) => {
  err.code = err.code ? err.code : 500;
  err.url = req.originalUrl;

  const error = new CustomError(
    err.name,
    err.messageKey,
    err.message,
    err.code
  );

  // TODO: https://www.joyent.com/node-js/production/design/errors

  if (process.env.NODE_ENV === 'development')
    logger.error(
      JSON.stringify(err, [
        'messageKey',
        'message',
        'stack',
        'url',
        'name',
        'code'
      ])
    );
  return res.status(error.code).send({err: err.message});
};
