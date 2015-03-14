'use strict';

var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');

var MainGenerator = module.exports = function MainGenerator(args, options, config) {
  ScriptBase.apply(this, arguments);

  this.options.appPath = path.join(this.options.appPath, 'scripts');
  console.log(this.options);
};

util.inherits(MainGenerator, ScriptBase);

MainGenerator.prototype.createAppFile = function createAppFile() {
  this.reactRouter = this.env.options.reactRouter;
  this.appTemplate('App', 'components/' + this.scriptAppName);
  this.testTemplate('spec/App', 'components/' + this.scriptAppName);
};

MainGenerator.prototype.createMainFile = function createMainFile() {
  if(this.env.options.reactRouter) {
    this.appTemplate('main', 'components/main');
  }
};
