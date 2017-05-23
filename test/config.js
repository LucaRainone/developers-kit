const path     = require('path');
const filesDir = path.normalize(__dirname + "/../files/");
const fs       = require('fs');

module.exports = {
	validate : require('./lib/validate/validate'),
	filesDir : filesDir,
	schemaXSD: filesDir + "schema-xsd/alpinebits.xsd",
	schemaRNG: filesDir + "schema-rng/alpinebits.rng",
}