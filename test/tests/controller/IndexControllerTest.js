var IoC     = require("electrolyte");
var request = require("supertest");

describe("IndexControllerTest", function() {

	it("GET /", function(done) {
		request(app)
		.get("/")
		.expect(200, done);
	});
});