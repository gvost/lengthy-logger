var assert = require('assert')
var fancyLog = require('../').fancyLog

describe('check raw output', function () {
  it('should return string containing the file path and lineno', function () {
    assert.equal('file:/Users/gvost/Developer/Projects/logger/test/add-string.js@line#6', fancyLog())
  })
})
describe('check enhanced output', function () {
  it('should return string containing the file path and lineno plus string argument', function () {
    assert.equal('file:/Users/gvost/Developer/Projects/logger/test/add-string.js@line#11 string', fancyLog('string'))
  })
})
