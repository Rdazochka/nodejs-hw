import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.statusCode).json({
      message: err.message,
    });
    return;
  }

  res.status(500).json({
    message: err.message || 'Something went wrong',
  });
};
