var test1 = require('../examples/foo.js')
var test2 = require('../examples/lo/borf.js')

describe('check output', function () {
  it('should log from foo.js @ line 4 file', function () {
    test1()
  })
})
describe('check nested output', function () {
  it('should log from borf.js @ lines 9, 12 & 14', function () {
    test2()
  })
})
