/**
 * Initialize a SomeService.
 *
 * This component initializes an instance of a SomeService.
 */
exports = module.exports = function (loggerFactory) {
	var logger = loggerFactory.makeLogger("service:SomeService");
	return new SomeService(logger);
}

/**
 * Component annotations.
 */
exports["@singleton"] = true;
exports["@require"]   = [
	"logger/LoggerFactory"
];

/**
 * Component implementation.
 */
function SomeService (logger) {
	this.logger = logger;
}

SomeService.prototype.helloWorld = function () {
	this.logger.info("hello world");
}
