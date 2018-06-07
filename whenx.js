/*
	whenx v0.1.0
	https://github.com/cdll/whenx
	Released under the MIT License.
*/
(function () {
  var version = "0.1.0";

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

  var whenx$1 = ({
    default: whenx_1$$1,
    __moduleExports: whenx_1$$1
  });

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

  var thenx$1 = ({
    default: thenx_1,
    __moduleExports: thenx_1
  });

  let main$1= whenx$1;
  // console.info(main)
  main$1.whenx= whenx$1;
  main$1.thenx= thenx$1;
  main$1.version= version;

  /**
   * @desc
   * @module Object
   * @return {object}
   * @member {function} whenx
   * @member {function} thenx
   */
  module.exports= main$1;

}());
