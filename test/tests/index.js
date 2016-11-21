var ioc = require("electrolyte");

before(function () {
	
	ioc.use("controller", ioc.dir("test/mocks/controller"));
	
	app.boot(function(err) {
		if (err) {
			console.log(err.message);
			console.log(err.stack);
			return process.exit(-1);
		}
	});
});

after(function () {

});