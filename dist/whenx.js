'use strict';

var name = "whenx";
var version = "0.1.0";
var description = "make weapp methods promisify";
var main = "src/main.js";
var scripts = {
	test: "npm test",
	start: "rollup -c"
};
var repository = {
	type: "git",
	url: "git+https://github.com/cdll/whenx.git"
};
var keywords = [
	"wx",
	"whenx",
	"thenx",
	"weapp",
	"promise",
	"thenable"
];
var author = "cdll";
var license = "MIT";
var bugs = {
	url: "https://github.com/cdll/whenx/issues"
};
var homepage = "https://github.com/cdll/whenx#readme";
var devDependencies = {
	rollup: "^0.60.0",
	"rollup-plugin-commonjs": "^9.1.3",
	"rollup-plugin-json": "^3.0.0",
	"rollup-plugin-node-resolve": "^3.3.0"
};
var _package = {
	name: name,
	version: version,
	description: description,
	main: main,
	scripts: scripts,
	repository: repository,
	keywords: keywords,
	author: author,
	license: license,
	bugs: bugs,
	homepage: homepage,
	devDependencies: devDependencies
};

var _package$1 = /*#__PURE__*/Object.freeze({
  name: name,
  version: version,
  description: description,
  main: main,
  scripts: scripts,
  repository: repository,
  keywords: keywords,
  author: author,
  license: license,
  bugs: bugs,
  homepage: homepage,
  devDependencies: devDependencies,
  default: _package
});

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

if(commonjsGlobal&& commonjsGlobal.wx== undefined){
  commonjsGlobal.wx= {};
}

const whenx= function(){
  let _wx= {};
  for(let k in wx){
    if(typeof wx[k] === 'function'){
      // console.info(`func: ${k}`)
      _wx[k]= (v)=> whenx_1$$1.call(this, k, v);
    }
  }
  return _wx
}();

/**
 * @desc
 * @module Object
 * @return {bject}
 */
var whenx_1$$1= whenx;

const thenx= (name, opts= {})=>{
  // console.info(`func: ${name}`)
  return new Promise((resolve, reject)=>{
    wx[name]( Object.assign(opts, {
      success: res=> resolve(res)
      ,fail: err=> reject(err)
      ,complete: opts.complete
    }) );
  })
};

/**
 * @desc
 * @module Function
 * @param {string} name
 * @param {object} opts
 * @return {promise}
 */
var thenx_1= thenx;

var require$$0 = ( _package$1 && _package ) || _package$1;

const version$1= require$$0.version;




let main$1= whenx_1$$1;
console.info(main$1);
main$1.__proto__.whenx= whenx_1$$1;
main$1.__proto__.thenx= thenx_1;
main$1.__proto__.version= version$1;

/**
 * @desc
 * @module Function
 * @return {object}
 * @member {function} whenx
 * @member {function} thenx
 */
var main_1= main$1;

console.info(main$1.version);

module.exports = main_1;
//# sourceMappingURL=whenx.js.map
