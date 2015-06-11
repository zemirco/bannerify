'use strict';

var through = require('through2');
var template = require('lodash/string/template');
var fs = require('fs');
var moment = require('moment');



module.exports = function (browserify, opts) {

  var pkg = {};
  var data = opts.file ? fs.readFileSync(opts.file) : opts.template;
  var compiled = template(data);



  /**
   * Get data from package.json
   */
  browserify.on('package', function (p) {
    pkg = p;
  });



  /**
   * Add banner to bundle
   */
  browserify.on('bundle', function() {
    var written = false;
    browserify.pipeline.get('wrap').push(through(function (chunk, enc, next) {
      if (!written) {
        var banner = compiled({
          pkg: pkg,
          moment: moment
        });
        this.push(new Buffer(banner));
        written = true;
      }
      this.push(chunk);
      next();
    }));
  });

};
