
var thenx= (name, opts= {})=>{
  return new Promise((resolve, reject)=>{
    var method= wx[name]( Object.assign(opts, {
      success: res=> resolve(res)
      ,fail: err=> reject(err)
      ,complete: opts.complete
    }) )
    //hook: add progress function hook for native returned task support
    if(opts.progress){
      if(typeof opts.progress== "function"){
        var task= method
        Function.call(opts.progress, task)
      }
      else console.warn(`[whenx]progress must be a function to call with task but not: ${typeof(opts.progress)}`)
    }
  })
}

/**
 * @desc
 * @module Function
 * @param {string} name
 * @param {object} opts
 * @return {promise}
 */
module.exports= thenx
