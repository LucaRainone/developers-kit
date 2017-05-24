const config          = require("../config");
const path            = require('path');
const fs              = require('fs');
const validate        = config.validate.againstXSD;
const fecthSchemaFile = require('./lib/fetchSchemaFile');

describe("All samples contrib", () => {
	let dir = config.filesDir + "samples-contrib/";
	fs.readdirSync(dir).forEach(file => {

		if (!path.extname(file) === ".xml") return;

		let schemaFile = fecthSchemaFile(dir + file);

		it("Validate against OTA " + file, (done) => {
			validate(dir + file, __dirname + "/schema/" + schemaFile).then(done).catch(done);
		})
	});
});
