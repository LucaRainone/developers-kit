const config   = require("../config");
const path     = require('path');
const fs       = require('fs');
const validate = config.validate.againstXSD;

describe("All samples", () => {
	let dir = config.filesDir + "samples/";
	fs.readdirSync(dir).forEach(file => {
		if (!path.extname(file) === ".xml") return;
		it("Validate against " + path.basename(config.schemaXSD) + " " + file, (done) => {
			validate(dir  + file, config.schemaXSD).then(done).catch(done);
		})
	});
});
