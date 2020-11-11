const { Schema, model } = require("mongoose");

const schema = new Schema({
	date: {
		type: Date,
		default: Date.now(),
	},
	source: {
		type: String,
		default: "unknown_source",
	},
	event: String,
	text: String,
});

module.exports = model("Alert", schema);
