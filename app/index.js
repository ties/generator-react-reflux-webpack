'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var generalUtils = require('../util.js');

var ReactRefluxWebpackGenerator = module.exports = function ReactRefluxWebpackGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.argument('appname', { type: String, required: false });
  this.appname = this.appname || path.basename(process.cwd());
  this.appname = this._.camelize(this._.slugify(this._.humanize(this.appname)));
  this.scriptAppName = this._.capitalize(this.appname) + generalUtils.appName(this);


  args = ['main'];

  if (typeof this.options.appPath === 'undefined') {
    this.options.appPath = this.options.appPath || 'src/scripts';
  }

  if (typeof this.options.htmlPath === 'undefined') {
    this.options.htmlPath = this.options.htmlPath || 'src/';
  }

  this.htmlPath = this.options.htmlPath;
  this.appPath = this.options.appPath;

  this.composeWith('react-reflux-webpack:common', {
    args: args
  });

  this.composeWith('react-reflux-webpack:main', {
    args: args
  });

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'], bower: false });
  });


  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));

  this.config.save();
};

util.inherits(ReactRefluxWebpackGenerator, yeoman.generators.Base);

ReactRefluxWebpackGenerator.prototype.welcome = function welcome() {
  // welcome message
  if (!this.options['skip-welcome-message']) {
    console.log(this.yeoman);
    console.log(
      'Out of the box I include Webpack, Reflux, and some default React components.\n'
    );
  }
};

ReactRefluxWebpackGenerator.prototype.askForReactRouter = function () {
  var done = this.async();
  this.prompt({
    type    : 'confirm',
    name    : 'reactRouter',
    message : 'Would you like to include react-router?',
    default : true
  }, function (props) {
    this.env.options.reactRouter = props.reactRouter;
    done();
  }.bind(this));
};

ReactRefluxWebpackGenerator.prototype.askForImmutableJS = function () {
  var done = this.async();
  this.prompt({
    type    : 'confirm',
    name    : 'immutableJS',
    message : 'Would you like to include Immutable.js?',
    default : true
  }, function (props) {
    this.env.options.immutableJS = props.immutableJS;
    done();
  }.bind(this));
};

ReactRefluxWebpackGenerator.prototype.askForSuperagent = function () {
  var done = this.async();
  this.prompt({
    type    : 'confirm',
    name    : 'superagent',
    message : 'Would you like to include superagent (a HTTP lib)?',
    default : true
  }, function (props) {
    this.env.options.superagent = props.superagent;
    done();
  }.bind(this));
};


ReactRefluxWebpackGenerator.prototype.askForStylesLanguage = function () {
  var done = this.async();
  this.prompt({
    type    : 'list',
    name    : 'stylesLanguage',
    message : 'Which styles language you want to use?',
    choices: [
        {name: 'CSS', value: 'css'},
        {name: 'SASS', value: 'sass'},
        {name: 'SCSS', value: 'scss'},
        {name: 'LESS', value: 'less'},
        {name: 'Stylus', value: 'stylus'}
    ],
    default : 'css'
  }, function (props) {
    this.env.options.stylesLanguage = props.stylesLanguage;
    this.config.set('styles-language', props.stylesLanguage);
    done();
  }.bind(this));
};

ReactRefluxWebpackGenerator.prototype.readIndex = function readIndex() {
  this.indexFile = this.engine(this.read('../../templates/common/index.html'), this);
};

ReactRefluxWebpackGenerator.prototype.createIndexHtml = function createIndexHtml() {
  this.indexFile = this.indexFile.replace(/&apos;/g, "'");
  this.write(path.join(this.htmlPath, 'index.html'), this.indexFile);
};

ReactRefluxWebpackGenerator.prototype.packageFiles = function () {
  this.reactRouter = this.env.options.reactRouter;
  this.immutableJS = this.env.options.immutableJS;
  this.stylesLanguage = this.env.options.stylesLanguage;
  this.superagent = this.env.options.superagent;

  this.template('../../templates/common/_package.json', 'package.json');
  this.template('../../templates/common/_webpack.config.js', 'webpack.config.js');
  this.template('../../templates/common/_webpack.dist.config.js', 'webpack.dist.config.js');
  this.copy('../../templates/common/Gruntfile.js', 'Gruntfile.js');
  this.copy('../../templates/common/gitignore', '.gitignore');
};

ReactRefluxWebpackGenerator.prototype.styleFiles = function styleFiles() {
  var mainFile = 'main.css';
  var normalizeFile = 'normalize.css';
  this.copy('styles/' + mainFile, 'src/styles/' + mainFile);
  this.copy('styles/' + normalizeFile, 'src/styles/' + normalizeFile);
};

ReactRefluxWebpackGenerator.prototype.imageFiles = function () {
  this.sourceRoot(path.join(__dirname, 'templates'));
  this.directory('images', 'src/images', true);
};

ReactRefluxWebpackGenerator.prototype.karmaFiles = function () {
  this.copy('../../templates/common/karma.conf.js', 'karma.conf.js');
};
