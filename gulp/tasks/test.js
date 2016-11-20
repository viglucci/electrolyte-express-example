var config   = require("../config.js");
var gulp     = require("gulp");
var mocha    = require("gulp-mocha");
var istanbul = require("gulp-istanbul");
var run      = require("run-sequence");

gulp.task("test", function (done) {
	run("pre-test", "run-test", done);
});

gulp.task("pre-test", function () {
	return gulp.src(config.test.src)
	// Covering files
	.pipe(istanbul())
	// Force `require` to return covered files
	.pipe(istanbul.hookRequire());
});

gulp.task("run-test", function (done) {
	return gulp.src(config.test.tests)
	.pipe(mocha({ timeout: 5000 }))
	.pipe(istanbul.writeReports())
	// Enforce a coverage of at least 90%
	.pipe(istanbul.enforceThresholds({ thresholds: { global: 0 } }));
});