
var Logger = require("./Logger.js");

/**
 * Initialize a LoggerFactory.
 *
 * This component initializes an instance of a LoggerFactory.
 */
exports = module.exports = function () {
	return new LoggerFactory();
}

/**
 * Component annotations.
 */
exports["@singleton"] = true;

/**
 * Component implementation.
 */
function LoggerFactory() {
}

LoggerFactory.prototype.makeLogger = function (namespace) {
	return new Logger(namespace);
}