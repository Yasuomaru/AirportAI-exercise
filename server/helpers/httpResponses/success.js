const {sendResponse} = require('./base');

/**
 * Sends a success HTTP response with a 200 status code and the provided data.
 *
 * @param {Object} res - The Express response object.
 * @param {Object|string|null} data - The data to send in the response body. Can be an object, string, or null.
 * @returns {Object} The Express response object.
 *
 * @example
 * // Example usage in an Express route handler:
 * app.get('/example', (req, res) => {
 *     sendSuccess(res, { message: 'Operation successful' });
 * });
 */
const sendSuccess = (res, data) => {
    sendResponse(res, 200, data);
}

/**
 * Sends a 201 Created response.
 * 
 * @param {Object} res - The Express response object.
 * @param {Object|string|null} data - The data to send in the response body. Can be an object, string, or null.
 * @returns {Object} The Express response object with a 201 status code and data.
 * 
 * @example
 * // Example usage in an Express route handler:
 * app.post('/example', (req, res) => {
 *    sendCreated(res, { message: 'Resource created' });
 * })
 * 
 */
const sendCreated = (res, data) => {
    sendResponse(res, 201, data);
}

/**
 * Sends a 204 No Content response.
 * 
 * @param {Object} res - The Express response object.
 * @returns {Object} The Express response object with a 204 status code.
 * 
 * @example
 * // Example usage in an Express route handler:
 * app.delete('/example', (req, res) => {
 *   sendNoContent(res);
 * })
 * 
 */

const sendNoContent = (res) => {
    sendResponse(res, 204);
}

module.exports = {
    sendSuccess,
    sendCreated,
    sendNoContent
};
