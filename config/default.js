
process.env.DEBUG = [
	"electrolyte",
	"app:*"
].join(",");

module.exports = {
	port: process.env.PORT || 3000,
	database: {
		client: "mysql",
		connection: {
			host : "127.0.0.1",
			user : "your_database_user",
			password : "your_database_password",
			database : "myapp_test"
		}
	}
};