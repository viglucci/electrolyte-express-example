var gulp       = require("gulp");
var requireDir = require("require-dir");
var run        = require("run-sequence");

var development = process.env.NODE_ENV !== "production";

var tasks = requireDir("./gulp/tasks");

gulp.task("build", function (done) {
	run(["build-views", "build-client", "build-server"], done);
});

gulp.task("clean-build", function (done) {
	run("clean", "build", done);
});

gulp.task("start", function (done) {
	run("server-start", done);
});

gulp.task("dev", function (done) {
	run("clean-build", "start", "watch", done);
});

gulp.task("default", function (done) {
	run("clean-build", "start", done);
});