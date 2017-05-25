const config   = require("../config");
const path     = require('path');
const fs       = require('fs');
const validate = config.validate.againstRNG;

describe("All samples", () => {

	let dir = config.filesDir + "samples/";

	fs.readdirSync(dir).forEach(file => {

		if (path.extname(file) !== ".xml") return;

		it("Validate against " + path.basename(config.schemaRNG) + " " + file, (done) => {
			validate(dir  + file, config.schemaRNG).then(done).catch(done);
		});

	});
});
