import createHttpError from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  const error = createHttpError(err.status || 500, err.message);

  res.status(error.statusCode).json({
    message: error.message,
  });
};
