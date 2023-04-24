// modules
// Common JS, every file is module bu default
// Modules - Encapsulated Code (only share minimum)
const names = require(`./names`);
const sayHi = require(`./utils`)
const data = require(`./alternative-flavor`);
require(`./mind-grenade`);

sayHi(`susan`)
sayHi(`john`)
sayHi(`peter`)