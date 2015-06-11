
# bannerify

[![Build Status](https://travis-ci.org/zemirco/bannerify.svg?branch=master)](https://travis-ci.org/zemirco/bannerify)

Add banner to your browserify bundle.

## Installation

```
$ npm install bannerify --save-dev
```

## Usage

`bannerify` uses [lodash templates](https://lodash.com/docs#template).
Inside your template you have access to data from to your `package.json` via `pkg`.
`moment` is included for human date formatting.

Example `banner.txt` template file.

```
/**
 * @name    <%= pkg.name %>
 * @version <%= pkg.version %> | <%= moment().format('MMMM Do YYYY') %>
 * @author  <%= pkg.author %>
 * @license <%= pkg.license %>
 */
```

Output

```
/**
 * @name    bannerify
 * @version 1.0.0 | June 11th 2015
 * @author  Mirco Zeiss <mirco.zeiss@gmail.com>
 * @license MIT
 */
```

When using [uglifyjs](https://github.com/mishoo/UglifyJS2) make sure you minify
with `--comments` to preserve comments in your minified output.

##### Inline template

```
$ browserify index.js -p [bannerify --template '/** hello world */'] > bundle.js
```

##### Template file

```
$ browserify index.js -p [bannerify --file ./banner.txt ] > bundle.js
```

## Test

```
$ npm test
```

## License

MIT
