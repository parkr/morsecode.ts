import morsecode = require("./morsecode");

var morseConverter = new morsecode.MorseCode();
console.log(morseConverter.translate("Hello, TypeScript!"));
