function test2 () {
  var log = require('../../')

  var object  = {
    foo: 'bar',
    too: false
  }

  log('message', object, object)


  log('hello', 'foo', 'bark')

  log('hey-o', ['hoop', 'la'])

}

test2()
