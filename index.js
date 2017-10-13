var color = require('colors');
var S = require('string');

function rawLog (str) {
  var orig = Error.prepareStackTrace;
  Error.prepareStackTrace = function (_, stack) { return stack };
  var err = new Error();
  Error.captureStackTrace(err, arguments.callee);
  var stack = err.stack;
  Error.prepareStackTrace = orig;
  var __fi = stack[0].getFileName();
  var __li = stack[0].getLineNumber();
  var printString;
  if (str) {
    printString = `file:${__fi}@line#${__li} ${str}`;
  } else {
    printString = `file:${__fi}@line#${__li}`;
  };
  return printString;
};
function fancyLog (str) {
  var orig = Error.prepareStackTrace;
  Error.prepareStackTrace = function (_, stack) { return stack };
  var err = new Error();
  Error.captureStackTrace(err, arguments.callee);
  var stack = err.stack;
  Error.prepareStackTrace = orig;
  var __fi = stack[0].getFileName();
  var __li = stack[0].getLineNumber();
  var printString;
  str ? printString = `file:${__fi}@line#${__li} ${str}` : printString = `file:${__fi}@line#${__li}`;
  console.log(printString)
  return printString;
}
module.exports = { rawLog, fancyLog }
fancyLog()
