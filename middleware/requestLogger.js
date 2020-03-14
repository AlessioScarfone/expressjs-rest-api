const requestLogger = (options) => {
  return (request, response, next) => {
    if (options.label)
      console.log('> Label:', options.label)
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
  }
}

export default requestLogger;

/**
 * If you need your middleware to be configurable, export a function which accepts an options object or other parameters, 
 * which, then returns the middleware implementation based on the input parameters.
 * 
 * Example:
 * module.exports = function (options) {
 *  return function (req, res, next) {
 *      // Implement the middleware function based on the options object
 *      next()
 *    }
 *  }
 */


 
/**
 * Simple is good... but Morgan is better.
 * https://github.com/expressjs/morgan
 * 
 * npm install morgan
 * 
 * import morgan from 'morgan'
 * 
 * Using a predefined format string
 * router.use(morgan('tiny'));
 * 
 * Create a new token
 * morgan.token('body', function (req, res) { return JSON.stringify(req.body) })
 * 
 * Using format string of predefined tokens:
 * router.use(morgan(':method :url :status - :response-time ms - Request Body:\n :body'));
 * 
 */