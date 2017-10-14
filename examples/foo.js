process.env.NODE_ENV = 'testing'

var log = require('../')

function test1 () {
  log('foopa')
}

var testObject = {
  test1: 'result',
  test2: 'result'
}
var testArray = [
  'one',
  'two',
  'three'
]

log(testObject)

test1()
