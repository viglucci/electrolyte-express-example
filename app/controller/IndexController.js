/**
 * This controller is used to handle requests to the index page.
 *
 * Parameters:
 *
 *   - `logger` logger for logging warnings, errors, etc.
 */
exports = module.exports = function (loggerFactory, someService) {
	var logger = loggerFactory.makeLogger("controller:IndexController");
	return new IndexController(logger, someService);
}

/**
 * Component annotations.
 */
exports["@singleton"] = true;
exports["@require"]   = [
	"logger/LoggerFactory",
	"service/SomeService"
];

/**
 * Component implementation.
 */
function IndexController (logger, someService) {
	this.logger = logger;
	this.someService = someService;
}

IndexController.prototype.handleIndex = function (req, res, next) {
	this.logger.debug("handleIndex");
	this.someService.helloWorld();
	return res.render("index");
};