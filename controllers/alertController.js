const Alert = require("./../models/alertModel");

async function newAlert(req, res, next) {
	const { source, event, text } = req.body;
	const alert = await Alert.create({ source, event, text });

	res.end();
}

module.exports = { newAlert };
