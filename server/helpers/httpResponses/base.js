/**
 * Sends an HTTP response with the given status code and data.
 *
 * @param {Object} res - The Express response object.
 * @param {number} statusCode - The HTTP status code to send.
 * @param {Object|string|null} data - The data to send in the response body. Can be an object, string, or null.
 * @returns {Object} The Express response object.
 *
 * @example
 * //Example usage in an Express route handler:
 * app.get('/example', (req, res) => {
 *     sendResponse(res, 200, { message: 'Success' });
 * });
 */
const sendResponse = (res, statusCode, data) => {
    res.status(statusCode).json(data);
}

/**
 * 
 */

/**
 * Sends an HTTP error response with the given status code and error message.
 * 
 * @param {Object} res - The Express response object.
 * @param {number} statusCode - The HTTP status code to send.
 * @param {string} error - The error message to send in the response body.
 * @returns {Object} The Express response object.
 * 
 * @example
 * //Example usage in an Express route handler:
 * app.get('/example', (req, res) => {
 *    sendError(res, 400, 'Bad request');
 * }
 * 
 */
const sendError = (res, statusCode, error) => {
    res.status(statusCode).json({ error });
}



module.exports = {
    sendResponse,
    sendError
};