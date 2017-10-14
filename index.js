var chalk = require('chalk');

function lengthylogger (message, ...args) {
  var orig = Error.prepareStackTrace;
  const myObject = {};
  var err = new Error();
  Error.prepareStackTrace = function (_, stack) { return stack };
  var stack = err.stack;
  var logObject = {
    file: stack[1].getFileName(),
    line: stack[1].getLineNumber(),
    objects: [],
    messages: [],
    message
  };
  args.forEach(arg => {
    if (typeof(arg) === 'string') {
      logObject.messages.push(arg);
    } if (typeof(arg) === 'object') {
      logObject.objects.push(arg);
    }
  });
  if (logObject.objects == 0) {
    console.log(`${chalk.dim('file')}@${chalk.cyan(logObject.file)}@${chalk.cyan('line')}${chalk.dim(logObject.line)} 🗣 ${message} ${logObject.messages.join(' ')}`);
  } else {
    console.log(`${chalk.dim('file')}@${chalk.cyan(logObject.file)}@${chalk.cyan('line')}${chalk.dim(logObject.line)} 🗣 ${message} ${logObject.messages.join(' ')}`, '\n', logObject.objects)
  };
  return false;
};

module.exports = lengthylogger;
