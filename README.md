### ___the lengthy logger___
> I used to get pretty frustrated when I would finish something and then need to remove all of my `console.log()`'s after loosing the context in my mind, so I made this kind of a logger to remind me exactly where I left my messages to myself. I will be expanding it so as to make it more fun to configure and use, drop feature requests into this repo's issues, and if you see anything wrong also let me know there. I hope that this is a helpful way to get a tiny bit more out of logging to the console 🤘

#### install
```sh
npm install --save-dev lengthy-logger
```

#### usage
> super simple here  

```js
var log = require('lengthy-logger')

var object = {
  thing1: 'bar',
  thing2: true
}
var array = ['loo', 'tag', 'moo']

log('single string argument')
// output: file@/Users/yourusername/.../where/you/called/file.js@line12 🗣 single string argument
log('string1', 'string2', 'string3', 'string4')
// output: file@/Users/yourusername/.../where/you/called/file.js@line12 🗣 string1 string2 string3 string4
log('string', object, array)
// output: file@/Users/yourusername/.../where/you/called/file.js@line12 🗣 string
//  [{ thing1: 'bar', thing2: true }, ['loo', 'tag', 'moo']]
```
