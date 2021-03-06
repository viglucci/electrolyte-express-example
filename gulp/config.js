var path = require("path");

module.exports = {
	test: {
		src: [
			path.resolve("src", "app", "controller", "**", "*.js"),
			path.resolve("src", "app", "lib", "**", "*.js"),
		],
		tests: [
			path.resolve("test", "tests", "index.js"),
			path.resolve("test", "tests", "controller", "*.js"),
		],
	}
};