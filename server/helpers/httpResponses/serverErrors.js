const { sendError } = require('./base.js');

/**
 * Sends a 500 Internal Server Error response.
 * 
 * @param {Object} res - The Express response object.
 * @param {*} error - The error message to send in the response body.
 * @returns {Object} The Express response object with a 500 status code and error message.
 * 
 * @example
 * // Example usage in an Express route handler:
 * app.get('/example', (req, res) => {
 *   sendInternalServerError(res, 'Internal server error');
 * })
 */
const sendInternalServerError = (res, error) => {
    sendError(res, 500, error);
}

module.exports = {
    sendInternalServerError
};