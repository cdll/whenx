/*
	whenx v1.1.3
	https://github.com/cdll/whenx
	Released under the MIT License.
*/
var whenx = (function () {
  'use strict';

  var version = "1.1.3";

  var thenx= (name, opts= {})=>{
    // console.info(`func: ${name}`)
    return new Promise((resolve, reject)=>{
      var method= wx[name]( Object.assign(opts, {
        success: res=> resolve(res)
        ,fail: err=> reject(err)
        ,complete: opts.complete
      }) );
      if(opts.progress){
        if(typeof opts.progress== "function"){
          var task= method;
          Function.call(opts.progress, task);
        }
        else console.warn(`[whenx]progress must be a function to call with task but not: ${typeof(opts.progress)}`);
      }
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

  var thenx$1 = ({
    default: thenx_1,
    __moduleExports: thenx_1
  });

  var whenx= function(){
    var _wx= {};
    for(var k in wx){
      if(typeof wx[k] === 'function'){
        // console.info(`func: ${k}`)
        _wx[k]= (v)=> thenx_1.call(this, k, v);
      }
      else{
        // console.info(`val: ${k}`)
        _wx[k]= wx[k];
      }
    }
    return _wx
  }();

  /**
   * @desc
   * @module Object
   * @return {bject}
   */
  var whenx_1= whenx;

  var whenx$1 = ({
    default: whenx_1,
    __moduleExports: whenx_1
  });

  var main$1= whenx$1;
  // console.info(main)
  main$1.whenx= whenx$1;
  main$1.thenx= thenx$1;
  main$1._version_= version;

  return main$1;

}());
