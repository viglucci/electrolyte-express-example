/**
 * This controller is used to handle requests to the index page.
 *
 * Parameters:
 *
 *   - `logger` logger for logging warnings, errors, etc.
 */
exports = module.exports = function (logger) {
	return new IndexController(logger);
}

/**
 * Component annotations.
 */
exports["@singleton"] = true;
exports["@require"] = ["logger"];

/**
 * Component implementation.
 */
function IndexController (app, logger) {
	this.logger = logger;
}

IndexController.prototype = {

	handleIndex: function (req, res, next) {
		return res.render("index");
	}

};