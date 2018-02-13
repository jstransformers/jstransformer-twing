# jstransformer-twing

[Twing](https://npm.im/twing) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-twing/master.svg)](https://travis-ci.org/jstransformers/jstransformer-twing)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-twing/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-twing)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-twing/master.svg)](http://david-dm.org/jstransformers/jstransformer-twing)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-twing.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-twing.svg)](https://www.npmjs.org/package/jstransformer-twing)

## Installation

    npm install jstransformer-twing

## API

```js
var twing = require('jstransformer')(require('jstransformer-twing'))

twing.render('Hello, {{ name }}!', { name: 'World' }).body
//=> 'Hello, World!'
```

## License

MIT
