const {sendError} = require('./base.js')

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
const sendBadRequest = (res, error) => {
    sendError(res, 400, error);
}

/**
 * Sends a 401 Unauthorized response.
 * 
 * @param {Object} res - The Express response object.
 * @param {*} error - The error message to send in the response body.
 * @returns {Object} The Express response object with a 401 status code and error message.
 * 
 * @example
 * // Example usage in an Express route handler:
 * app.get('/example', (req, res) => {
 *  sendUnauthorized(res, 'Unauthorized');
 * })
 */
const sendUnauthorized = (res, error) => {
    sendError(res, 401, error);
}

/**
 * Sends a 403 Forbidden response.
 * 
 * @param {Object} res - The Express response object.
 * @param {*} error - The error message to send in the response body.
 * @returns {Object} The Express response object with a 403 status code and error message.
 * 
 * @example
 * // Example usage in an Express route handler:
 * app.get('/example', (req, res) => {
 * sendForbidden(res, 'Forbidden');
 * })
 */
const sendForbidden = (res, error) => {
    sendError(res, 403, error);
}

/**
 * Sends a 404 Not Found response.
 *  
 * @param {Object} res - The Express response object.
 * @param {*} error - The error message to send in the response body.
 * @returns {Object} The Express response object with a 404 status code and error message.
 * 
 * @example
 * // Example usage in an Express route handler:
 * app.get('/example', (req, res) => {
 *  sendNotFound(res, 'Not found');
 * })
 */

const sendNotFound = (res, error) => {
    sendError(res, 404, error);
}

module.exports = {
    sendBadRequest,
    sendUnauthorized,
    sendForbidden,
    sendNotFound
};