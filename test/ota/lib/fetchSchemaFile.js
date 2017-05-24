const fs = require('fs');

module.exports = function(file) {
	let content = fs.readFileSync(file).toString();
	let match   = content.match(/xsi:schemaLocation\s*=\s*"http:\/\/www\.opentravel\.org\/OTA\/[0-9]+\/[0-9]+\s*(.*?)"/);
	if(match === null) {
		throw "Unable to  match xsi:schemaLocation file on root element";
	}
	return match[1];
}