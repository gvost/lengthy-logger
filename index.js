var chalk = require('chalk');

function lengthylogger (arg1, ...args) {
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
    arg1
  };
  args.forEach(arg => {
    if (typeof(arg) === 'string') {
      logObject.messages.push(arg);
    } if (typeof(arg) === 'object') {
      logObject.objects.push(arg);
    }
  });
  if (process.env.NODE_ENV !== 'testing') {
    if (typeof(arg1) !== 'string') {
      console.log(`${chalk.dim('file')}@${chalk.cyan(logObject.file)}@${chalk.cyan('line')}${chalk.dim(logObject.line)} 🗣`, '\n', arg1);
    } else {
      if (logObject.objects == 0) {
        console.log(`${chalk.dim('file')}@${chalk.cyan(logObject.file)}@${chalk.cyan('line')}${chalk.dim(logObject.line)} 🗣 ${arg1} ${logObject.messages.join(' ')}`);
      } else {
        console.log(`${chalk.dim('file')}@${chalk.cyan(logObject.file)}@${chalk.cyan('line')}${chalk.dim(logObject.line)} 🗣 ${arg1} ${logObject.messages.join(' ')}`, '\n', logObject.objects);
      };
    };
  } else {
    return logObject;
  };
};

module.exports = lengthylogger;
