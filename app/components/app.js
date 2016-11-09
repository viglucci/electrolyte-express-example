/**
 * Module dependencies.
 */
var express = require("express")
var app     = express();

/**
 * Initialize settings.
 *
 * This component configures the application's http layer.
 */
exports = module.exports = app;

/**
 * Component annotations.
 */
exports["@singleton"] = true;
