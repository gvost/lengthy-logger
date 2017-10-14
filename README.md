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

log('single string argument')
```

##### ___or___

```js
var log = require('lengthy-logger')

console.log(log(), 'other stuff you want to see')
```
