// organize all http responses in one place

const BaseResponses = require('./base.js');
const Successes = require('./success.js');
const Errors = require('./errors.js');
const ServerErrors = require('./serverErrors.js');

module.exports = {
    base: {
        ...BaseResponses,
    },
    successes: {
        ...Successes,
    },
    errors: {
        ...Errors,
    },
    serverErrors: {
        ...ServerErrors,
    },
};