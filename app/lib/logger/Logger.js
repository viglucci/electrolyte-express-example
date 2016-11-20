var debug = require("debug");

var Logger = function (namespace) {
	this.namespace = "app:" + namespace;
	this._debug    = debug(this.namespace + ":debug");
	this._info     = debug(this.namespace + ":info");
	this._warning  = debug(this.namespace + ":warn");
	this._error    = debug(this.namespace + ":error");
}

Logger.prototype.debug = function (msg) {
	this._debug(msg);
}

Logger.prototype.info = function (msg) {
	this._info(msg);
}

Logger.prototype.warn = function (msg) {
	this._warning(msg);
}

Logger.prototype.error = function (msg) {
	this._error(msg);
}

exports = module.exports = Logger;