var child_process = require('child_process');

module.exports    = {
	againstXSD: function(xmlFile, schema) {
		return new Promise(function (resolve, reject) {

			child_process.exec(
				__dirname + "/validate-xsd.sh " + schema + " " + xmlFile,
				function(error, stdout, stderr)  {
					if (error !== null || stderr !== "") {
						reject(error, stderr);
						return ;
					}
					resolve(stdout);
				}
			);
		});
	},
	againstRNG: function(xmlFile, schema) {
		return new Promise(function (resolve, reject) {

			child_process.exec(
				__dirname + "/validate-rng.sh " + schema + " " + xmlFile,
				function(error, stdout, stderr)  {
					if (error !== null || stderr !== "") {
						reject(error, stderr);
						return ;
					}
					resolve(stdout);
				}
			);
		});
	}
}