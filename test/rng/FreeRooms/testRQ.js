const config   = require("../../config");
const path     = require('path');
const fs       = require('fs');
const validate = config.validate.againstRNG;

describe("FreeRooms", () => {
	describe("RQ-not-valid", () => {
		let dir = __dirname+"/not-valid-xml/";
		fs.readdirSync(dir).forEach(file => {
			if (!path.extname(file) === ".xml") return;
			it(file, (done) => {
				validate(dir  + file, config.schemaRNG).then(()=> {
					done("Validation should fails")
				}).catch(() => {
					done();
				});
			})
		});
	});
});