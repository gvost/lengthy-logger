process.env.NODE_ENV = 'testing'

var assert = require('assert')
var log = require('../')

var testObject = {
  test1: 'result',
  test2: 'result'
}
var testArray = [
  'one',
  'two',
  'three'
]

describe('check file', function () {
  it('should return correct file', function () {
    var logObject = log()
    assert.equal(`${process.env.PWD}/test/output.js`, logObject.file)
  })
})
describe('check line', function () {
  it('should return correct line', function () {
    var logObject = log()
    assert.equal(24, logObject.line)
  })
})
describe('check argument output (single string)', function () {
  it('should return single matching string', function () {
    var logObject = log('string')
    assert.equal('string', logObject.arg1)
  })
})
describe('check argument output (multipule strings)', function () {
  it('should return multi-string array', function () {
    var logObject = log('string', 'string', 'string')
    assert.equal('string', logObject.messages[0])
    assert.equal('string', logObject.messages[1])
  })
})
describe('check argument output (mixed arguments)', function () {
  it('should return multi-string array', function () {
    var logObject = log('string', 'string', 'string', testObject, testArray)
    assert.equal('string', logObject.messages[0])
    assert.equal('string', logObject.messages[1])
    assert.equal(testObject, logObject.objects[0])
    assert.equal(testArray, logObject.objects[1])
  })
})
