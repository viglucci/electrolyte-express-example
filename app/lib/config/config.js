/**
 * Initialize a Database connection.
 *
 * This component initializes an instance of a SomeService.
 */
exports = module.exports = connect;

/**
 * Component annotations.
 */
exports["@singleton"] = true;
exports["@require"]   = [
	"knex",
	"config"
];

/**
 * Component implementation.
 */
function connect (knex, config) {
	return knex({
		client: config.database.client,
		connection: config.database.connection
	});
}