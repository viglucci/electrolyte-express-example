/**
 * Initialize views.
 */
module.exports = function () {
  
	this.set("views", __dirname + "/../../app/views");
	this.set("view engine", "pug");
  
}
