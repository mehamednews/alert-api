const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

if (process.env.NODE_ENV !== "production") require("dotenv").config({ path: "./config.env" });

// routers
app.use("/alert", require("./routers/alertRouter"));

(async function () {
	try {
		await require("mongoose").connect(process.env.DB, {
			useUnifiedTopology: true,
			useFindAndModify: false,
			useNewUrlParser: true,
			useCreateIndex: true,
		});
	} catch (error) {
		console.log(`couldn't connect to db, error:`, error);
	}

	const port = process.env.PORT || 1111;
	app.listen(port, () => {
		console.clear();
		console.log(`App Running On Port ${port}`);
	});
})();
